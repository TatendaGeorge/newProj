using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using FirstBoilerPlateApp.EntityFrameworkCore;
using FirstBoilerPlateApp.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace FirstBoilerPlateApp.Web.Tests
{
    [DependsOn(
        typeof(FirstBoilerPlateAppWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class FirstBoilerPlateAppWebTestModule : AbpModule
    {
        public FirstBoilerPlateAppWebTestModule(FirstBoilerPlateAppEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(FirstBoilerPlateAppWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(FirstBoilerPlateAppWebMvcModule).Assembly);
        }
    }
}