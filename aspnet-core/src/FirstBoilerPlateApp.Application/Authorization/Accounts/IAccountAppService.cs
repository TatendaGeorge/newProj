using System.Threading.Tasks;
using Abp.Application.Services;
using FirstBoilerPlateApp.Authorization.Accounts.Dto;

namespace FirstBoilerPlateApp.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
