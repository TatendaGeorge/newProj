using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using FirstBoilerPlateApp.Authorization.Roles;
using FirstBoilerPlateApp.Authorization.Users;
using FirstBoilerPlateApp.MultiTenancy;
using FirstBoilerPlateApp.Events;
using FirstBoilerPlateApp.Employees;

namespace FirstBoilerPlateApp.EntityFrameworkCore
{
    public class FirstBoilerPlateAppDbContext : AbpZeroDbContext<Tenant, Role, User, FirstBoilerPlateAppDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public virtual DbSet<Event> Events { get; set; }
        public virtual DbSet<EventRegistration> EventRegistrations { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }
        public FirstBoilerPlateAppDbContext(DbContextOptions<FirstBoilerPlateAppDbContext> options)
            : base(options)
        {
        }
    }
}
