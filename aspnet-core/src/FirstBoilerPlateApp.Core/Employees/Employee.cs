using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstBoilerPlateApp.Employees
{
    [Table("Employees")]
    public class Employee : FullAuditedEntity<Guid>
    {
        [Required]
        public virtual string Name { get; set; }

        [Required]
        public virtual string Email { get; set; }
        [Required]
        public virtual string PhoneNumber { get; set; }
        [Required]
        public virtual string Department { get; set; }
        [Required]
        public virtual string TimePreference { get; set; }
        [Required]
        public virtual string subscribe { get; set; }

        public static Employee Create(string Name, string Email, string PhoneNumber, string Department, string TimePreference, string subscribe)
        {
            var @employee = new Employee
            {
                Id = Guid.NewGuid(),
                Name = Name,
                Email = Email,
                PhoneNumber = PhoneNumber,
                Department = Department,
                TimePreference = TimePreference,
                subscribe = subscribe
            };
            //@event.SetDate(date);
            return @employee ;
        }
    }
}
