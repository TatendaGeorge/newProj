using System.ComponentModel.DataAnnotations;

namespace FirstBoilerPlateApp.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}