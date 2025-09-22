using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Service.OtpService
{
    public class OtpService: IOtpService
    {
        private readonly IMemoryCache _cache;
        private readonly TimeSpan _ttl = TimeSpan.FromMinutes(5);
        public OtpService( IMemoryCache cache) {
            _cache = cache;

        }

        public string GenerateOtp(string phone)
        {
            var otp = Generate6DigitOtp();
            _cache.Set(phone, otp, _ttl);
            return otp;
        }

        public bool ValidateOtp(string phone, string otp)
        {
            if (_cache.TryGetValue<string>(phone, out var storeotp))
            {
                if (storeotp == otp)
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
            uint value = BitConverter.ToUInt32(bytes, 0);
            int otp = (int)(value % 1_000_000);
            return otp.ToString("D6");
        }

    }
}
