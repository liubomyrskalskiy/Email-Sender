using EmailSender.Core.Abstractions.Repositories;
using System;

namespace EmailSender.Core.Abstractions
{
    public interface IUnitOfWork : IDisposable
    {
        public IEmailRepository EmailRepository { get; }
        public void SaveChanges();
    }
}
