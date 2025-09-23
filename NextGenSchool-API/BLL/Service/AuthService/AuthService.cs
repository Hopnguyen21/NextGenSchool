using BLL.Service.JwtService;
using BLL.Service.OtpService;
using DAL.DTO;
using DAL.Entities;
using DAL.Repository.UserRepo;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Concurrent;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace BLL.Service.AuthService
{
   
    public class AuthService : IAuthService
    {
        private readonly IUserRepo _userRepo;
        private readonly IOtpService _otpService;
        private readonly IJwtService _jwtService;
        public AuthService(IUserRepo userRepo, IOtpService otpService, IJwtService jwtService)
        {
            _userRepo = userRepo;
            _otpService = otpService;
            _jwtService = jwtService;
        }

        public async Task<ProfileUserDTO?> LoginByPhoneAsync(string phoneNumber)
        {
            var result = await _userRepo.LoginPhone(phoneNumber);
            if (result == null || !result.LoginType)
            {
                return null;
            }
            return result;
        }

        // OTP
        public string GenerateOtp(string phone) => _otpService.GenerateOtp(phone);
        public bool ValidateOtp(string phone, string otp) => _otpService.ValidateOtp(phone, otp);

        // JWT
        public Task<string?> GenerateJwtTokenAsync(ProfileUserDTO user) => _jwtService.GenerateJwtTokenAsync(user);
    }

}
