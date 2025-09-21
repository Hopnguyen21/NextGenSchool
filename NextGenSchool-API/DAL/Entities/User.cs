using System;
using System.Collections.Generic;

namespace DAL.Entities;

public partial class User
{
    public int UserId { get; set; }

    public string UserName { get; set; } = null!;

    public string? AvatarUrl { get; set; }

    public string? Email { get; set; }

    public string Phone { get; set; } = null!;

    public bool LoginType { get; set; }

    public string? ExternalId { get; set; }

    public int? TenantId { get; set; }

    public bool IsActive { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime UpdatedAt { get; set; }

    public virtual Tenant Tenant { get; set; } = null!;

    public virtual ICollection<UsersRole> UsersRoles { get; set; } = new List<UsersRole>();
}
