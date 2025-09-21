using DAL.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repository.UserRepo
{
    public class UserRepo: IUserRepo
    {
        private readonly NgschoolContext _context;
        public UserRepo() {
            _context = new NgschoolContext();
        }
        public async Task<User?> LoginPhone(string phonenumber)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Phone == phonenumber);
        }
    }
}
