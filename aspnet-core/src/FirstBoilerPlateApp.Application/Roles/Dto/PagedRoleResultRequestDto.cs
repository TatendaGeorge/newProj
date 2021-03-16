using Abp.Application.Services.Dto;

namespace FirstBoilerPlateApp.Roles.Dto
{
    public class PagedRoleResultRequestDto : PagedResultRequestDto
    {
        public string Keyword { get; set; }
    }
}

