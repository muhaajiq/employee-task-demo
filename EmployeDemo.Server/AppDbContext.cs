using EmployeeDemo.Entities;
using Microsoft.EntityFrameworkCore;

namespace EmployeDemo.Server
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<TaskItem> Tasks { get; set; }
    }
}
