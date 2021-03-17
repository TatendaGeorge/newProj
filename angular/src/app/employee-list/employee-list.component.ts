import { PagedListingComponentBase, PagedRequestDto } from 'shared/paged-listing-component-base';
import { EmployeeListDto } from './../../shared/service-proxies/service-proxies';
import { EmployeeServicesServiceProxy } from './../../shared/service-proxies/service-proxies';
import { Component, OnInit, Inject, Injector } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent extends PagedListingComponentBase<EmployeeListDto> {

  protected delete(entity: EmployeeListDto): void {
    console.log(entity);

    this.message.confirm(
      this.l("UserDeleteWarningMessage", entity.name),
      undefined,
      (res) => {
        if (res) {
          this._employeeService.delete(stringify(entity.id))
            .subscribe(() => {
              this.notify.success("Deleted");
              // this.router.navigate(['app/employees']);
              this.refresh();
            })
        }
      }
    )
  }

  protected list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function): void {
    throw new Error('Method not implemented.');
  }

  public selectedId;
  public employees: EmployeeListDto[] = [];

  constructor(private inject: Injector, private router: Router, private route: ActivatedRoute, private _employeeService: EmployeeServicesServiceProxy) {
    super(inject);
  }

  ngOnInit(): void {
    this._employeeService.getAll()
      .subscribe(data => this.employees = data);

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(employees) {
    this.router.navigate(['app/employees', employees.id])
  }

  isSelected(employees) {
    return employees.id === this.selectedId;
  }


}
