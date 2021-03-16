import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { HeroComponent } from './hero/hero.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '', component: AppComponent,
        children: [
            { path: 'home', component: HeroComponent },
            { path: 'employees', component: EmployeeListComponent },
            {
                path: 'employees/:id',
                component: EmployeeDetailComponent,
                children: [
                    { path: 'overview', component: EmployeeOverviewComponent },
                    { path: 'contact', component: EmployeeContactComponent }
                ]
            },
            { path: 'departments', component: DepartmentListComponent },
            { path: 'add', component: AddEmployeeComponent },
            { path: "**", component: PageNotFoundComponent }
        ]
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, EmployeeListComponent, PageNotFoundComponent, EmployeeDetailComponent, EmployeeOverviewComponent, EmployeeContactComponent, AddEmployeeComponent];
