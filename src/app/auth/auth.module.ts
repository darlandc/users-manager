import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class AuthModule {}
