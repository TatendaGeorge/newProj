using Abp.Domain.Services;
using System;
using System.Threading.Tasks;

namespace FirstBoilerPlateApp.Employees
{
    public interface IEmployeeManager : IDomainService
    {
        Task CreateAsync(Employee employee);
        Task<Employee> UpdateEmployeeAsync(Employee employee);
        Task DeleteAsync(Employee employee);
        Task<Employee> GetUserByIdAsync(Guid employeeId);
    }
}