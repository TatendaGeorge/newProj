import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppEventServiceProxy, EmployeeServicesServiceProxy } from './../shared/service-proxies/service-proxies';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
// import { HomeComponent } from '@app/home/home.component';
// import { AboutComponent } from '@app/about/about.component';
// tenants
import { TenantsComponent } from '@app/tenants/tenants.component';
import { CreateTenantDialogComponent } from './tenants/create-tenant/create-tenant-dialog.component';
import { EditTenantDialogComponent } from './tenants/edit-tenant/edit-tenant-dialog.component';
// roles
import { RolesComponent } from '@app/roles/roles.component';
import { CreateRoleDialogComponent } from './roles/create-role/create-role-dialog.component';
import { EditRoleDialogComponent } from './roles/edit-role/edit-role-dialog.component';
// users
import { UsersComponent } from '@app/users/users.component';
import { CreateUserDialogComponent } from '@app/users/create-user/create-user-dialog.component';
import { EditUserDialogComponent } from '@app/users/edit-user/edit-user-dialog.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { ResetPasswordDialogComponent } from './users/reset-password/reset-password.component';
// layout
// import { HeaderComponent } from './layout/header.component';
// import { HeaderLeftNavbarComponent } from './layout/header-left-navbar.component';
// import { HeaderLanguageMenuComponent } from './layout/header-language-menu.component';
// import { HeaderUserMenuComponent } from './layout/header-user-menu.component';
// import { FooterComponent } from './layout/footer.component';
// import { SidebarComponent } from './layout/sidebar.component';
// import { SidebarLogoComponent } from './layout/sidebar-logo.component';
// import { SidebarUserPanelComponent } from './layout/sidebar-user-panel.component';
// import { SidebarMenuComponent } from './layout/sidebar-menu.component';
// import { EventsComponent } from './events/events.component';
// import { CreateEventComponent } from './events/create-event/create-event.component';
// import { EventDetailComponent } from './events/event-detail/event-detail.component';
// import { SideBarNavComponent } from '../app/layout/sidebar-nav.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeroComponent } from './hero/hero.component';
@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    NavBarComponent,
    HeroComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    DepartmentListComponent,
    PageNotFoundComponent,
    EmployeeOverviewComponent,
    EmployeeContactComponent,
    // HomeComponent,
    // AboutComponent,
    // tenants
    TenantsComponent,
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    RolesComponent,
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    UsersComponent,
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ChangePasswordComponent,
    ResetPasswordDialogComponent
    // layout
    // HeaderComponent,
    // HeaderLeftNavbarComponent,
    // HeaderLanguageMenuComponent,
    // HeaderUserMenuComponent,
    // FooterComponent,
    // SidebarComponent,
    // SidebarLogoComponent,
    // SidebarUserPanelComponent,
    // SidebarMenuComponent,
    // EventsComponent,
    // CreateEventComponent,
    // EventDetailComponent,
    // SideBarNavComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // HttpClientJsonpModule,
    ModalModule.forChild(),
    BsDropdownModule,

    CommonModule,
    CollapseModule,
    TabsModule,
    AppRoutingModule,
    ServiceProxyModule,
    SharedModule,
    NgxPaginationModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [AppEventServiceProxy, EmployeeServicesServiceProxy],
  entryComponents: [
    // tenants
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ResetPasswordDialogComponent,
    //events
    // EventsComponent,
    // EventDetailComponent,
    // CreateEventComponent
  ]
})
export class AppModule { }
