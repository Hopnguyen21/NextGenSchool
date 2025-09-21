using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Service.AuthService
{
    public interface IAuthService
    {
        string GenerateOtp(string phone);
        bool ValidateOtp(string phone, string otp);
        Task<User?> LoginByPhoneAsync(string phoneNumber);
        Task<string?> GenerateJwtTokenAsync(User user);
    }
}
