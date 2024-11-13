import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signin.component.html',
  styles: ``
})
export default class SigninComponent implements OnInit {
  public signinForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.signinForm.valid) {
      this.login();
    }
  }

  public login(): void {
    const { username, password } = this.signinForm.value;
    this.authService.signIn(username, password).subscribe({
      next: () => {
        this.router.navigate(['/landing/home']);
      },
      error: (error) => {
        console.error("Login failed", error);
      }
    })
  }
}
