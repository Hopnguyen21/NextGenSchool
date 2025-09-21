using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repository.UserRepo
{
    public interface IUserRepo
    {
        Task<User?> LoginPhone(string phoneNumber);
    }
}
