using System.Collections.Generic;

namespace EmailSender.Core.Abstractions.Services
{
    public interface IService<TDto> where TDto : class
    {
        List<TDto> GetAll();
        void Delete(int id);
        void Post(TDto dto);
    }
}
