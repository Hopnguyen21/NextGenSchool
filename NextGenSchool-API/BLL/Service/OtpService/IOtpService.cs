using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Service.OtpService
{
    public interface IOtpService
    {
        string GenerateOtp(string phone);
        bool ValidateOtp(string phone, string otp);
    }
}
