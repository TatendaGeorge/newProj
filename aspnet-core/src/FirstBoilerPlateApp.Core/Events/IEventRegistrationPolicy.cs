using FirstBoilerPlateApp.Authorization.Users;
using Abp.Domain.Services;
using System.Threading.Tasks;

namespace FirstBoilerPlateApp.Events
{
    public interface IEventRegistrationPolicy : IDomainService
    {

        Task CheckRegistrationAttempAsync(Event @event, User user);
    }
}