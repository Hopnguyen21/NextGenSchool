using DAL.DTO;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Service.JwtService
{
    public interface IJwtService
    {
        Task<string?> GenerateJwtTokenAsync(ProfileUserDTO user);
    }
}
