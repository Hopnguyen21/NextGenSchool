using DAL.DTO;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Service.UserService
{
    public interface IUserService
    {
        Task<ProfileUserDTO?> Login(string PhoneNumber);
    }
}
