using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Data 
{
    public class EcoLearnDbContext : DbContext
    {
        public DbSet<Article> Articles { get; set; }

        public EcoLearnDbContext(DbContextOptions<EcoLearnDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           base.OnModelCreating(modelBuilder);
        }
    }
}