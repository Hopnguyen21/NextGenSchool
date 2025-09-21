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
        private readonly IConfiguration _config;
        private readonly IMemoryCache _cache;
        private readonly TimeSpan _ttl = TimeSpan.FromMinutes(5);
        public AuthService(IUserRepo userRepo, IConfiguration config, IMemoryCache cache)
        {
            _userRepo = userRepo;
            _config = config;
            _cache = cache;
        }

        #region OTP

        public string GenerateOtp(string phone)
        {
            var otp = Generate6DigitOtp();
            _cache.Set(phone, otp, _ttl);
            return otp;
        }

        public bool ValidateOtp(string phone, string otp)
        {
            if(_cache.TryGetValue<string>(phone,out var storeotp))
            {
                if(storeotp == otp)
                {
                    _cache.Remove(phone);
                    return true;
                }
            }
            return false;
        }

        private string Generate6DigitOtp()
        {
           using var rng = RandomNumberGenerator.Create();
           var bytes = new byte[4];
            rng.GetBytes(bytes);
            uint value  = BitConverter.ToUInt32(bytes, 0);
            int otp = (int)(value % 1_000_000);
            return otp.ToString("D6");
        }

        #endregion

        #region JWT/Login

        public async Task<User?> LoginByPhoneAsync(string phoneNumber)
        {
            return await _userRepo.LoginPhone(phoneNumber);
        }

        public async Task<string?> GenerateJwtTokenAsync(User user)
        {
            if (user == null) return null;

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.UserId.ToString()),
                new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName),
                new Claim("phone", user.Phone ?? ""),
                new Claim("tenantId", user.TenantId?.ToString() ?? "")
            };

            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddHours(4),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        #endregion
    }
}
