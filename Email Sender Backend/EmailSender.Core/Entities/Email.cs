namespace EmailSender.Core.Entities
{
    public class Email : IEntity<int>
    {
        public int Id { get; set; }
        public string Recipients { get; set; }

        public string Subject { get; set; }

        public string Message { get; set; }
    }
}
