using DAL.Repository.UserRepo;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.DTO;

namespace BLL.Service.UserService
{
    public class UserService : IUserService
    {
        private readonly UserRepo _userRepo;
        public UserService()
        {
            _userRepo = new UserRepo();
        }
        public Task<ProfileUserDTO?> Login(string PhoneNumber)
        {
            return _userRepo.LoginPhone(PhoneNumber);
        }
    }
}
