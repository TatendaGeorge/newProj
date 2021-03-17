using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstBoilerPlateApp.Employees.Dtos
{

    [AutoMapTo(typeof(Employee))]
    [AutoMapFrom(typeof(Employee))]
    public class EmployeeListDto : EntityDto <Guid>
    {
        public virtual string Name { get; set; }
        
        public virtual string Email { get; set; }
       
        public virtual string PhoneNumber { get; set; }
        
        public virtual string Department { get; set; }
        
        public virtual string TimePreference { get; set; }
        
        public virtual string subscribe { get; set; }
    }
}
