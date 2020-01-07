using EmailSender.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace EmailSender.DAL
{
    public class FluentAPIContext : DbContext
    {
        public DbSet<Email> Emails { get; set; }
        public FluentAPIContext()
        {

        }
        public FluentAPIContext(DbContextOptions options) : base(options)
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Email>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedOnAdd();
            });
        }
    }
}
