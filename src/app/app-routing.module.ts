import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details/company-details.component';
import { HomepageComponent } from './Homepage/homepage/homepage.component';
import { LoginComponent } from './LoginComponents/login/login.component';
import { RegisterComponent } from './LoginComponents/register/register.component';

const routes: Routes = [{ path: '', component: LoginComponent },{path:"showcompany",component:CompanyDetailsComponent
},{ path: 'register', component: RegisterComponent },{ path: 'home', component: HomepageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
