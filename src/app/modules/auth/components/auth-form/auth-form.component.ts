import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserData } from '../../interfaces/user-data.interface';
import { AuthService } from '../../services/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnDestroy {
  form: FormGroup;
  unsubscribe$ = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  logUserIn() {
    const user: UserData = {
      email: this.form.get('email').value,
      password: this.form.get('password').value,
    };

    this.authService
      .signIn(user)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.router.navigate(['/shop']);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
