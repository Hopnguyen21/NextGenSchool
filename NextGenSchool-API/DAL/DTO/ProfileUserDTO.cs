using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DTO
{
    public class ProfileUserDTO
    {
        public int UserId { get; set; }

        public string UserName { get; set; } = null!;

        public string? AvatarUrl { get; set; }

        public string? Email { get; set; }

        public string Phone { get; set; } = null!;
        public int? TenantId { get; set; }

        public bool IsActive { get; set; }
        public int RoleId { get; set; }
        public bool LoginType { get; set; }
        public string RoleName { get; set; } = null!;
    }
}
