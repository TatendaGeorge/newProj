using Abp.Domain.Repositories;
using Abp.Events.Bus;
using Abp.UI;
using FirstBoilerPlateApp.Authorization.Users;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstBoilerPlateApp.Employees
{
    public class EmployeeManager : IEmployeeManager
    {
        public IEventBus EmployeeBus { get; set; }

        //private readonly IEmployeeRegistrationPolicy _registrationPolicy;
        //private readonly IRepository<EmployeeRegistration> _employeeRegistrationRepository;
        private readonly IRepository<Employee, Guid> _employeeRepository;

        public EmployeeManager(
            //IEmployeeRegistrationPolicy registrationPolicy,
            
            IRepository<Employee, Guid> eventRepository)
        {
            //_registrationPolicy = registrationPolicy;
            _employeeRepository = eventRepository;

            EmployeeBus = NullEventBus.Instance;
        }

        public async Task<Employee> GetAsync(Guid id)
        {
            var @employee = await _employeeRepository.FirstOrDefaultAsync(id);
            if (@employee == null)
            {
                throw new UserFriendlyException("Could not found the event, maybe it's deleted!");

            }

            return @employee;
        }

        public async Task CreateAsync(Employee @employee)
        {
            await _employeeRepository.InsertAsync(@employee);
        }

        public async Task <Employee> UpdateEmployeeAsync(Employee @employee)
        {
            return await _employeeRepository.UpdateAsync(@employee);
        }

        public async Task DeleteAsync(Guid employeeId)
        {
            var empId = await _employeeRepository.FirstOrDefaultAsync(employeeId);
            if(empId == null)
            {
                throw new UserFriendlyException("Could not found the employee, maybe it's deleted!");
            }

            await _employeeRepository.DeleteAsync(empId);
        }
    }  
}
