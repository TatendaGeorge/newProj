import { AppEventServiceProxy } from './../../shared/service-proxies/service-proxies';

import { Component, Injector, ViewChild } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { EventListDto, EventListDtoListResultDto, GuidEntityDto } from '@shared/service-proxies/service-proxies';
import { PagedListingComponentBase, PagedRequestDto } from "shared/paged-listing-component-base";
import { CreateEventComponent } from "app/events/create-event/create-event.component";

@Component({
  templateUrl: './events.component.html',
  animations: [appModuleAnimation()]
})
export class EventsComponent extends PagedListingComponentBase<EventListDto> {

  @ViewChild('createEventModal') createEventModal: CreateEventComponent;

  active: boolean = false;
  events: EventListDto[] = [];
  includeCanceledEvents: boolean = false;

  constructor(
    injector: Injector,
    private _eventService: AppEventServiceProxy
  ) {
    super(injector);
  }

  protected list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function): void {
    this.loadEvent();
    finishedCallback();
  }

  protected delete(event: GuidEntityDto): void {
    abp.message.confirm(
      'Are you sure you want to cancel this event?', '',
      (result: boolean) => {
        if (result) {
          this._eventService.cancel(event)
            .subscribe(() => {
              abp.notify.info('Event is deleted');
              this.refresh();
            });
        }
      }
    );
  }

  includeCanceledEventsCheckboxChanged() {
    this.loadEvent();
  };

  createEvent(): void {
    this.createEventModal.show();
  }

  loadEvent() {
    this._eventService.getList(this.includeCanceledEvents)
      .subscribe((result) => {
        this.events = result.items;
      });
  }
}

