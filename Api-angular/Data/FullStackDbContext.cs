using Api_angular.Models;
using Microsoft.EntityFrameworkCore;

namespace Api_angular.Data
{
    public class FullStackDbContext : DbContext
    {
        public FullStackDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Tasks> Tasks { get; set; }
    }
}
