using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using FirstBoilerPlateApp.Configuration;
using FirstBoilerPlateApp.Web;

namespace FirstBoilerPlateApp.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class FirstBoilerPlateAppDbContextFactory : IDesignTimeDbContextFactory<FirstBoilerPlateAppDbContext>
    {
        public FirstBoilerPlateAppDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<FirstBoilerPlateAppDbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            FirstBoilerPlateAppDbContextConfigurer.Configure(builder, configuration.GetConnectionString(FirstBoilerPlateAppConsts.ConnectionStringName));

            return new FirstBoilerPlateAppDbContext(builder.Options);
        }
    }
}
