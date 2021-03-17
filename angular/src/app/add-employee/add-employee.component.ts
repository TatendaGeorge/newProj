import { EmployeeServicesServiceProxy } from './../../shared/service-proxies/service-proxies';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from '@shared/user-name.validator';
import { PasswordValidator } from '@shared/password-validator';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  registrationForm: FormGroup;

  get email() {
    return this.registrationForm.get('email');
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''));
  }
  // registrationForm = new FormGroup({
  //   userName: new FormControl('Tatenda'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });


  departments = ['Hr', 'Accounting', 'Procurement'];
  departmentHasError = true;
  errorMsg = '';

  // userModel = new NewEmployee('Rob', 'rob@test.com', 5555555566, 'default', 'morning', true);

  constructor(private route: ActivatedRoute, private router: Router, private _employeeService: EmployeeServicesServiceProxy, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: [''],
      email: [''],
      phoneNumber: [''],
      department: [''],
      timePreference: [''],
      subscribe: [''],
    });
  }


  validateDepartment(value) {
    if (value === 'default') {
      this.departmentHasError = true;
    } else {
      this.departmentHasError = false;
    }
  }

  // onSubmit() {
  //    this._employeeService.add(this.userModel)
  //       .subscribe(
  //         data => console.log('Success!', data),
  //        error => this.errorMsg = error.statusText
  //        )
  //   }

  onSubmit() {
    console.log(this.registrationForm.value);
    // this._employeeService.add(this.registrationForm.value)
    //   .subscribe(
    //     response => console.log('Success!', response),
    //     error => console.log('Error!', error)
    //   );

    this._employeeService.create(this.registrationForm.value)
      .subscribe(
        response => { console.log('Success!', response); this.router.navigate(['/app/employees']); },
        error => console.log('Error!', error)
      );
  }

  loadApiData() {
    this.registrationForm.patchValue({
      userName: 'Bruce',
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'City',
        state: 'State',
        postalCode: '5201'
      }
    });
  }


}
