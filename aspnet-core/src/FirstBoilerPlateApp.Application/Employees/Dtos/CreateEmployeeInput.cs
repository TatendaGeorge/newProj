using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace FirstBoilerPlateApp.Employees.Dtos
{
    public class CreateEmployeeInput
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
        public virtual string subcribe { get; set; }
    }
}
