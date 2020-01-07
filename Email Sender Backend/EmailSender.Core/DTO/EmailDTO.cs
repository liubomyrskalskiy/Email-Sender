using System.Collections.Generic;

namespace EmailSender.Core.DTO
{
    public class EmailDTO
    {
        public int Id { get; set; } 
        public List<string> Recipients { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
    }
}
