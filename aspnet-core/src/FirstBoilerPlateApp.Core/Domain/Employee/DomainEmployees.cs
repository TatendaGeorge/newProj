using Abp.Events.Bus;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstBoilerPlateApp.Domain.Employee
{
    class DomainEmployees
    {
        public static IEventBus EmployeeBus { get; set; }

        static DomainEmployees()
        {
            EmployeeBus = Abp.Events.Bus.EventBus.Default;
        }
    }
}
