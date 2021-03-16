import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employeeId;
  public employees = [];

  constructor(private _employeeService: EmployeeServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.employeeId = id;


    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.employeeId = id;
    });

  }

  goBack() {
    this._employeeService.getEmployees()
      .subscribe(data => { this.employees = data });

    if (this.employeeId > 1 || this.employeeId > this.employees.length) {
      let previousId = this.employeeId - 1;
      this.router.navigate(['/employees', previousId]);
    }
  }

  goForward() {
    this._employeeService.getEmployees()
      .subscribe(data => { this.employees = data });

    if (this.employeeId < this.employees.length) {
      let forwardId = this.employeeId + 1;
      this.router.navigate(['/employees', forwardId]);
    }
  }

  backToEmployees() {
    let selectedId = this.employeeId ? this.employeeId : null;
    this.router.navigate(['/employees', { id: selectedId }]);
  }

  showOverView() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }

}
