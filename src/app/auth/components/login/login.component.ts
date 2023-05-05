import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly auth: AuthService
  ) {}

  ngOnInit(): void {
    const minitoken = this.getMinitoken();
    if (minitoken) {
      this.auth.doLogin(minitoken).subscribe((res) => {
        if (res.code === 201) {
          console.log('Login success');
          this.auth.loggedIn$.next(true);
          this._router.navigate(['/dashboard']);
        }
      });
    }
  }

  getMinitoken(): string {
    return this._route.snapshot.queryParams['minitoken'] || null;
  }
}
