using EmailSender.Core.Abstractions.Services;
using EmailSender.Core.DTO;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace EmailSender_Backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [EnableCors("AllowMyOrigin")]
    public class MailController : ControllerBase
    {
        private ISenderService _senderService;
        public MailController(ISenderService _senderService)
        {
            this._senderService = _senderService;
        }

        [HttpGet]
        public ActionResult<List<EmailDTO>> GetAll()
        {
            var result = _senderService.GetAll();
            return Ok(result);
        }

        [HttpPost]
        public IActionResult Post(EmailDTO mailDto)
        {
            _senderService.Post(mailDto);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _senderService.Delete(id);
            return NoContent();
        }
    }
}