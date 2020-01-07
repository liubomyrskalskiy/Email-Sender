using EmailSender.Core.Abstractions;
using EmailSender.Core.Abstractions.Repositories;
using EmailSender.DAL.Repositories;

namespace EmailSender.DAL
{
    public class UnitOfWork : IUnitOfWork
    {
        private FluentAPIContext _context;
        private IEmailRepository _emailRepository;

        public UnitOfWork(FluentAPIContext context)
        {
            _context = context;
        }

        public IEmailRepository EmailRepository
        {
            get
            {
                return _emailRepository ??= new EmailRepository(_context);
            }
        }

        public void Dispose()
        {
            if (_context != null)
            {
                _context.Dispose();
                _context = null;
            }
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }
    }
}
