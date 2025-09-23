using Azure.Core;
using BLL.Service.AuthService;
using BLL.Service.UserService;
using DAL.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;

namespace NextGenSchool.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }
        [HttpGet]
        public async Task<IActionResult> GetUser([FromQuery] string phone)
        {
            var user = await _authService.LoginByPhoneAsync(phone);
            if (user == null) return BadRequest("Login failed");

            var otp = _authService.GenerateOtp(phone);
            return Ok(new
            { message = "OTP sent", otp });
        }
        [HttpPost("verify-otp")]
        public async Task<IActionResult> VerifyOtp([FromQuery] string phone, [FromQuery] string otp)
        {
            if (!_authService.ValidateOtp(phone, otp))
                return BadRequest("Invalid or expired OTP");

            var user = await _authService.LoginByPhoneAsync(phone);
            if (user == null)
                return BadRequest("User not found");

            var token = await _authService.GenerateJwtTokenAsync(user);

            return Ok(new
            {
                token,
                user
            });
        }
    }
}
