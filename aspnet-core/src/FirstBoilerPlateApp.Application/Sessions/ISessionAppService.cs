using System.Threading.Tasks;
using Abp.Application.Services;
using FirstBoilerPlateApp.Sessions.Dto;

namespace FirstBoilerPlateApp.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
