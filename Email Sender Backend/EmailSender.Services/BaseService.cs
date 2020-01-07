using AutoMapper;
using EmailSender.Core.Abstractions;

namespace EmailSender.Services
{
    public class BaseService
    {
        protected IUnitOfWork unitOfWork;
        protected IMapper _mapper;
        public BaseService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.unitOfWork = unitOfWork;
            _mapper = mapper;
        }
    }
}
