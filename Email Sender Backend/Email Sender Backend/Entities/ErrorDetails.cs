﻿using Newtonsoft.Json;

namespace Email_Sender_Backend.Entities
{
    public class ErrorDetails
    {
        public int Status { get; set; }
        public string Message { get; set; }
        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}
