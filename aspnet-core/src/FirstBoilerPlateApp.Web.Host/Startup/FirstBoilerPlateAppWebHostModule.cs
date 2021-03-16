using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using FirstBoilerPlateApp.Configuration;

namespace FirstBoilerPlateApp.Web.Host.Startup
{
    [DependsOn(
       typeof(FirstBoilerPlateAppWebCoreModule))]
    public class FirstBoilerPlateAppWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public FirstBoilerPlateAppWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(FirstBoilerPlateAppWebHostModule).GetAssembly());
        }
    }
}
