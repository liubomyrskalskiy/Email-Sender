using System.Linq;

namespace EmailSender.Core.Abstractions.Repositories
{
    public interface IRepository<TEntity> where TEntity : class
    {
        IQueryable<TEntity> GetAll();
        TEntity GetById(object id);
        TEntity Add(TEntity entity);
        void Delete(TEntity entity);
    }
}
