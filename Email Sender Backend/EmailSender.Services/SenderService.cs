using AutoMapper;
using EmailSender.Core.Abstractions;
using EmailSender.Core.Abstractions.Services;
using EmailSender.Core.DTO;
using EmailSender.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;

namespace EmailSender.Services
{
    public class SenderService : BaseService, ISenderService
    {
        public SenderService(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper)
        {
                
        }
        public void Delete(int id)
        {
            var entity = unitOfWork.EmailRepository.GetById(id);
            unitOfWork.EmailRepository.Delete(entity);
            unitOfWork.SaveChanges();
        }
        public List<EmailDTO> GetAll()
        {
            return unitOfWork.EmailRepository.GetAll().Select(item => _mapper.Map(item, new EmailDTO())).ToList();
        }
        public void Post(EmailDTO mailDto)
        {
            MailMessage mail = new MailMessage
            {
                From = new MailAddress("smth"),
                Subject = mailDto.Subject,
                Body = mailDto.Message,
                IsBodyHtml = true
            };
            foreach (string recipient in mailDto.Recipients)
                mail.To.Add(recipient);

            SmtpClient smtpServer = new SmtpClient("smtp.gmail.com", 587)
            {
                Credentials = new System.Net.NetworkCredential("smt", "smth"),
                EnableSsl = true
            };
            smtpServer.Send(mail);
            var valueToInsert = new Email();
            _mapper.Map(mailDto, valueToInsert);
            unitOfWork.EmailRepository.Add(valueToInsert);
            unitOfWork.SaveChanges();
            smtpServer.Dispose();
        }
    }
}
