using Microsoft.Extensions.Configuration;
using Castle.MicroKernel.Registration;
using Abp.Events.Bus;
using Abp.Modules;
using Abp.Reflection.Extensions;
using FirstBoilerPlateApp.Configuration;
using FirstBoilerPlateApp.EntityFrameworkCore;
using FirstBoilerPlateApp.Migrator.DependencyInjection;

namespace FirstBoilerPlateApp.Migrator
{
    [DependsOn(typeof(FirstBoilerPlateAppEntityFrameworkModule))]
    public class FirstBoilerPlateAppMigratorModule : AbpModule
    {
        private readonly IConfigurationRoot _appConfiguration;

        public FirstBoilerPlateAppMigratorModule(FirstBoilerPlateAppEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbSeed = true;

            _appConfiguration = AppConfigurations.Get(
                typeof(FirstBoilerPlateAppMigratorModule).GetAssembly().GetDirectoryPathOrNull()
            );
        }

        public override void PreInitialize()
        {
            Configuration.DefaultNameOrConnectionString = _appConfiguration.GetConnectionString(
                FirstBoilerPlateAppConsts.ConnectionStringName
            );

            Configuration.BackgroundJobs.IsJobExecutionEnabled = false;
            Configuration.ReplaceService(
                typeof(IEventBus), 
                () => IocManager.IocContainer.Register(
                    Component.For<IEventBus>().Instance(NullEventBus.Instance)
                )
            );
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(FirstBoilerPlateAppMigratorModule).GetAssembly());
            ServiceCollectionRegistrar.Register(IocManager);
        }
    }
}
