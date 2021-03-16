using Abp.Application.Services;
using FirstBoilerPlateApp.MultiTenancy.Dto;

namespace FirstBoilerPlateApp.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

