using EmailSender.Core.Abstractions.Repositories;
using EmailSender.Core.Entities;
using System.Linq;

namespace EmailSender.DAL.Repositories
{
    public abstract class BaseRepository<TEntity> : IRepository<TEntity> where TEntity : class, IEntity<int>
    {
        private readonly FluentAPIContext _context;

        protected BaseRepository(FluentAPIContext context)
        {
            _context = context;
        }

        public TEntity Add(TEntity entity)
        {
            _context.Set<TEntity>().Add(entity);
            return entity;
        }

        public void Delete(TEntity entity)
        {
            _context.Set<TEntity>().Remove(entity);
        }

        public IQueryable<TEntity> GetAll()
        {
            return _context.Set<TEntity>().AsQueryable();
        }

        public TEntity GetById(object id)
        {
            return _context.Set<TEntity>().Find(id);
        }
    }
}
