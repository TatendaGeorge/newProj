using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace FirstBoilerPlateApp.Controllers
{
    public abstract class FirstBoilerPlateAppControllerBase: AbpController
    {
        protected FirstBoilerPlateAppControllerBase()
        {
            LocalizationSourceName = FirstBoilerPlateAppConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
