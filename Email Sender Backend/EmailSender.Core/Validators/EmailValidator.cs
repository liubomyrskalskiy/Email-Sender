using EmailSender.Core.DTO;
using FluentValidation;

namespace EmailSender.Core.Validators
{
    public class EmailValidator : AbstractValidator<EmailDTO>
    {
        public EmailValidator()
        {
            RuleFor(email => email.Message).NotNull();
            RuleFor(email => email.Subject).NotNull().MaximumLength(250);
            RuleForEach(email => email.Recipients).NotNull().EmailAddress();
        }
    }
}
