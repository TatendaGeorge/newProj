using Abp.Domain.Repositories;
using FirstBoilerPlateApp.Employees.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstBoilerPlateApp.Employees
{
    public class EmployeeServices : FirstBoilerPlateAppAppServiceBase
    {
        private readonly IEmployeeManager _employeeManager;
        private readonly IRepository<Employee, Guid> _employeetRepository;

        public EmployeeServices(
            IEmployeeManager employeeManager,
            IRepository<Employee, Guid> employeetRepository)
        {
            _employeeManager = employeeManager;
            _employeetRepository = employeetRepository;
        }

        public async Task CreateAsync(CreateEmployeeInput input)
        {
            var @employee = Employee.Create(input.Name, input.Email, input.PhoneNumber, input.Department, input.TimePreference, input.subcribe);
            await _employeeManager.CreateAsync(@employee);
        }
        public async Task<EmployeeListDto> GetDetailAsync(EntityDto<Guid> input)
        {
            var @employee = await _employeetRepository
                .GetAll()
                .Where(e => e.Id == input.Id)
                .FirstOrDefaultAsync();

            if (@employee == null)
            {
                throw new UserFriendlyException("Could not found the employee, maybe it's deleted.");
            }

            return @employee.MapTo<EmployeeListDto>();
        }

        public async Task<UpdateEmployeeDto> UpdateEmployee(UpdateEmployeeDto employee, Guid employeeId)
        {
            var e = await _employeetRepository.FirstOrDefaultAsync(employeeId);

            if(e == null)
            {
                throw new UserFriendlyException("This employee does not exist");
            }
            var id = e.Id;

            ObjectMapper.Map(employee, e);
            e.Id = id;
            return ObjectMapper.Map<UpdateEmployeeDto>(await _employeeManager.UpdateEmployeeAsync(e));

        }

        public async Task DeleteAsync(Guid employeeId)
        {
            var user = await _employeeManager.GetUserByIdAsync(employeeId);

            await _employeeManager.DeleteAsync(user);
        }

        public async Task<EmployeeListDto> GetUserByIdAsync(Guid employeeId)
        {
            var e = await _employeetRepository.FirstOrDefaultAsync(employeeId);
            if (e == null)
            {
                throw new UserFriendlyException("This employee does not exist");
            }

            return ObjectMapper.Map<EmployeeListDto>(e);
        }
    }
}
