using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace FirstBoilerPlateApp.EntityFrameworkCore
{
    public static class FirstBoilerPlateAppDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<FirstBoilerPlateAppDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<FirstBoilerPlateAppDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
