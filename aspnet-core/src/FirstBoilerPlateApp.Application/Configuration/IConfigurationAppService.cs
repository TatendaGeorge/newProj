using System.Threading.Tasks;
using FirstBoilerPlateApp.Configuration.Dto;

namespace FirstBoilerPlateApp.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
