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
       
        Task<User?> LoginByPhoneAsync(string phoneNumber);
        string GenerateOtp(string phone);
        bool ValidateOtp(string phone, string otp);
        Task<string?> GenerateJwtTokenAsync(User user);

    }
}
