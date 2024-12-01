import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styles: ``
})
export default class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(@Inject(FormBuilder) private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      const { username, lastname, email, password } = this.signupForm.value;
      this.signUp();
    }
  }

  public signUp(): void {
    const { username, lastname, email, password } = this.signupForm.value;
    this.auth.signUp(username, lastname, email, password).subscribe({
      next: () => {
        this.router.navigate(['/dashboard/home']);
      },
      error: (error) => {
        console.error("Signup failed", error);
      }
    });
  }

}
