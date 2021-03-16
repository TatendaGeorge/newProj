import { finalize } from 'rxjs/operators';
import { CreateEventInput } from './../../../shared/service-proxies/service-proxies';
import { AppComponentBase } from '@shared/app-component-base';
import { Component, OnInit, ViewChild, Injector, Output, EventEmitter, ElementRef } from '@angular/core';
import { AppEventServiceProxy } from '.../../shared/service-proxies/service-proxies';
import { ModalDirective } from 'ngx-bootstrap/modal';
declare var $: any;
import * as moment from 'moment';


@Component({
  selector: 'create-event-modal',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent extends AppComponentBase {

  @ViewChild('createEventModal') modal: ModalDirective;
  @ViewChild('modalContent') modalContent: ElementRef;
  @ViewChild('eventDate') eventDate: ElementRef;

  @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

  active: boolean = false;
  saving: boolean = false;
  event: CreateEventInput = null;
  myDateValue;
  constructor(
    injector: Injector,
    private _eventService: AppEventServiceProxy
  ) {
    super(injector);
  }

  show(): void {
    this.active = true;
    this.modal.show();
    this.event = new CreateEventInput();
    this.event.init({ isActive: true });
  }

  // onShown(): void {
  //   ($ as any).AdminBSB.Input.activate($(this.modalContent.nativeElement));
  //   ($ as any)(this.eventDate.nativeElement).datetimepicker({
  //     locale: abp.localization.currentLanguage.name,
  //     format: 'L'
  //   });
  // }

  save(): void {
    this.saving = true;
    this.event.date = this.myDateValue;
    this._eventService.create(this.event)
      .pipe(finalize(() => { this.saving = false; }))
      .subscribe(() => {
        this.notify.info(this.l('SavedSuccessfully'));
        this.close();
        this.modalSave.emit(null);
      });
  }

  close(): void {
    this.active = false;
    this.modal.hide();
  }

  ngOnInit(): void {
  }

}
