import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';


export const hasRoleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const currentUser = authService.currentUser;

  if (currentUser && currentUser.role && currentUser.role.includes('ADMIN')) {
    return true;
  } else {
    console.log("User: ", currentUser);
    router.navigate(['/unauthorized']);
    return false;
  }
};
