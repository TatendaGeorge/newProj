using Abp.Domain.Services;
using FirstBoilerPlateApp.Authorization.Users;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FirstBoilerPlateApp.Events
{
    public interface IEventManager : IDomainService
    {
        Task<IReadOnlyList<User>> GetRegisteredUsersAsync(Event @event);
        Task CreateAsync(Event @event);
        Task<Event> GetAsync(Guid id);
        void Cancel(Event @event);
        Task<EventRegistration> RegisterAsync(Event @event, User user);
    }
}