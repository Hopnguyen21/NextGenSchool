using System;
using System.Collections.Generic;

namespace DAL.Entities;

public partial class Tenant
{
    public int TenantId { get; set; }

    public string TenantName { get; set; } = null!;

    public string TenantCode { get; set; } = null!;

    public string? LogoUrl { get; set; }

    public string? Address { get; set; }

    public string? PhoneContact { get; set; }

    public DateTime CreateAt { get; set; }

    public string? EmailContact { get; set; }

    public bool IsActive { get; set; }

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
