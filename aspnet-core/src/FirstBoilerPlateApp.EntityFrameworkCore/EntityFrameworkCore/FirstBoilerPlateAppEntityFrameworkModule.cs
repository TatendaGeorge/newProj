using Abp.EntityFrameworkCore.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Abp.Zero.EntityFrameworkCore;
using FirstBoilerPlateApp.EntityFrameworkCore.Seed;

namespace FirstBoilerPlateApp.EntityFrameworkCore
{
    [DependsOn(
        typeof(FirstBoilerPlateAppCoreModule), 
        typeof(AbpZeroCoreEntityFrameworkCoreModule))]
    public class FirstBoilerPlateAppEntityFrameworkModule : AbpModule
    {
        /* Used it tests to skip dbcontext registration, in order to use in-memory database of EF Core */
        public bool SkipDbContextRegistration { get; set; }

        public bool SkipDbSeed { get; set; }

        public override void PreInitialize()
        {
            if (!SkipDbContextRegistration)
            {
                Configuration.Modules.AbpEfCore().AddDbContext<FirstBoilerPlateAppDbContext>(options =>
                {
                    if (options.ExistingConnection != null)
                    {
                        FirstBoilerPlateAppDbContextConfigurer.Configure(options.DbContextOptions, options.ExistingConnection);
                    }
                    else
                    {
                        FirstBoilerPlateAppDbContextConfigurer.Configure(options.DbContextOptions, options.ConnectionString);
                    }
                });
            }
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(FirstBoilerPlateAppEntityFrameworkModule).GetAssembly());
        }

        public override void PostInitialize()
        {
            if (!SkipDbSeed)
            {
                SeedHelper.SeedHostDb(IocManager);
            }
        }
    }
}
