import { EmployeeServiceService } from './../employee-service.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public selectedId;
  public employees = [];

  constructor(private _employeeService: EmployeeServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data);

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(employees) {
    this.router.navigate(['/employees', employees.id])
  }

  isSelected(employees) {
    return employees.id === this.selectedId;
  }

}
