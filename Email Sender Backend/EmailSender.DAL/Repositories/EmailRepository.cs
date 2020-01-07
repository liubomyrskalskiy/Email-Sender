using EmailSender.Core.Abstractions.Repositories;
using EmailSender.Core.Entities;

namespace EmailSender.DAL.Repositories
{
    class EmailRepository : BaseRepository<Email>, IEmailRepository
    {
        public EmailRepository(FluentAPIContext context) : base(context)
        {

        }
    }
}
