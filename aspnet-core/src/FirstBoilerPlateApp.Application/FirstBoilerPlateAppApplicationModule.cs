using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using FirstBoilerPlateApp.Authorization;

namespace FirstBoilerPlateApp
{
    [DependsOn(
        typeof(FirstBoilerPlateAppCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class FirstBoilerPlateAppApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<FirstBoilerPlateAppAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(FirstBoilerPlateAppApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
