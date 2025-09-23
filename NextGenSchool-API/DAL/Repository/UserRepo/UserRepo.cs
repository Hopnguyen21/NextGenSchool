using DAL.DTO;
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
        public async Task<ProfileUserDTO?> LoginPhone(string phonenumber)
        {
            var user = await _context.Users
         .Where(u => u.Phone == phonenumber)
         .Include(u => u.UsersRoles)
             .ThenInclude(ur => ur.Role)
         .FirstOrDefaultAsync();

            if (user == null)
                return null;

            // Map sang DTO
            var userDto = new ProfileUserDTO
            {
                UserId = user.UserId,
                UserName = user.UserName,
                AvatarUrl = user.AvatarUrl,
                Email = user.Email,
                Phone = user.Phone,
                TenantId = user.TenantId,
                IsActive = user.IsActive,
                // Nếu user có nhiều role, lấy role đầu tiên (hoặc thay đổi DTO thành List)
                RoleId = user.UsersRoles.Select(ur => ur.Role.RoleId).FirstOrDefault(),
                RoleName = user.UsersRoles.Select(ur => ur.Role.RoleName).FirstOrDefault(),
                 LoginType = user.LoginType,
            };
            

            return userDto;
        }
    }
}
