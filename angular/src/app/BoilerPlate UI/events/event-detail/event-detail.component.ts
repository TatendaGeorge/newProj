import { Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppComponentBase } from '@shared/app-component-base';
import { AppEventServiceProxy, EventDetailOutput, GuidEntityDto, EventRegisterOutput } from '@shared/service-proxies/service-proxies';

import * as _ from 'lodash';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  animations: [appModuleAnimation()]
})
export class EventDetailComponent extends AppComponentBase implements OnInit {

  event: EventDetailOutput = new EventDetailOutput();
  eventId: string;

  constructor(
    injector: Injector,
    private _eventService: AppEventServiceProxy,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      this.eventId = params['eventId'];
      this.loadEvent();
    });
  }

  registerToEvent(): void {
    var input = new GuidEntityDto();
    input.id = this.event.id;

    this._eventService.register(input)
      .subscribe((result: EventRegisterOutput) => {
        abp.notify.success('Successfully registered to event. Your registration id: ' + result.registrationId + ".");
        this.loadEvent();
      });
  };

  cancelRegistrationFromEvent(): void {
    var input = new GuidEntityDto();
    input.id = this.event.id;

    this._eventService.cancelRegistration(input)
      .subscribe(() => {
        abp.notify.success('Canceled your registration.');
        this.loadEvent();
      });
  };

  cancelEvent(): void {
    var input = new GuidEntityDto();
    input.id = this.event.id;

    this._eventService.cancelRegistration(input)
      .subscribe(() => {
        abp.notify.success('Canceled the event.');
        this.backToEventsPage();
      });
  };

  isRegistered(): boolean {
    return _.some(this.event.registrations, { userId: abp.session.userId });
  };

  isEventCreator(): boolean {
    return this.event.creatorUserId === abp.session.userId;
  };

  loadEvent() {
    this._eventService.getDetail(this.eventId)
      .subscribe((result: EventDetailOutput) => {
        this.event = result;
      });
  }

  backToEventsPage() {
    this._router.navigate(['app/events']);
  };

}
