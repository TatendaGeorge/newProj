using Abp.Events.Bus.Entities;

namespace FirstBoilerPlateApp.Events
{
    public class EventDateChangedEvent: EntityEventData<Event>
    {
        public EventDateChangedEvent(Event entity)
            :base(entity)
        {
            
        }
    }
}