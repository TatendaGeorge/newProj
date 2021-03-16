using Abp.Events.Bus.Entities;

namespace FirstBoilerPlateApp.Events
{
    public class EventCancelledEvent : EntityEventData<Event>
    {
        
        public EventCancelledEvent(Event entity)
            :base(entity)
        {
            
        }
    }
}