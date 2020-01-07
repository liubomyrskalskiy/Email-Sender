using AutoMapper;
using EmailSender.Core.DTO;
using EmailSender.Core.Entities;
using System.Linq;

namespace EmailSender.Core
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<EmailDTO, Email>().ForMember(destination => destination.Recipients, opt => opt.MapFrom(source => string.Join(", ", source.Recipients)));

            CreateMap<Email, EmailDTO>().ForMember(destination => destination.Recipients, opt => opt.MapFrom(source => source.Recipients.Split(new char[] { ',' }).ToList()));
        }
    }
}
