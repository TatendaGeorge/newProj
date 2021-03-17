import { EmployeeListDto, UpdateEmployeeDto } from './../../shared/service-proxies/service-proxies';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
//import { EmployeeServiceService } from '../employee-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { EmployeeServicesServiceProxy } from '@shared/service-proxies/service-proxies';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  registrationForm: FormGroup;
  public employeeId;
  public employees = new EmployeeListDto();
  public update = new UpdateEmployeeDto();

  departments = ['Hr', 'Accounting', 'Procurement'];
  departmentHasError = true;
  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private _employeeService: EmployeeServicesServiceProxy) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = (params.get('id'));
      this.employeeId = id;
    });

    this._employeeService.getDetail(this.employeeId)
      .subscribe(data => {
        this.employees = data
        this.registrationForm = this.fb.group({
          name: [this.employees.name],
          email: [this.employees.email],
          phoneNumber: [this.employees.phoneNumber],
          department: [this.employees.department],
          timePreference: [this.employees.timePreference],
          subscribe: [this.employees.subscribe],
        });
      })


  }

  backToEmployees() {
    let selectedId = this.employeeId ? this.employeeId : null;
    this.router.navigate(['app/employees', { id: selectedId }]);
  }

  showOverView() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
  onSubmit() {
    console.log(this.registrationForm.value);
    this.update = this.registrationForm.value
    console.log(this.employeeId);
    this._employeeService.updateEmployee(this.employeeId, this.update)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['app/employees']);
      })
  }
}
