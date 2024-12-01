import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { inject } from '@angular/core';
import { user } from '@angular/fire/auth';
import { map } from 'rxjs';

export const routerInjection = () => inject(Router);
export const authStateObs$ = () => inject(AuthService).authState$;

// export const AuthGuard: CanActivateFn = (route, state) => {
//   const authService = inject(AuthService);
//   const router = inject(Router);

//   if (!authService.isAuthenticated()) {

//     }
//     return router.createUrlTree(['/signin']);
//   }

//   return true;
// };

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = routerInjection();
  const authService = inject(AuthService);


  return authStateObs$().pipe(
    map(user => {
      if (!user || !authService.isAuthenticated()) {
        router.navigate(['/signin']);
        return false;
      }
      return true;
    })
  );
};



export const publicGuard: CanActivateFn = (route, state) => {
  const router = routerInjection();

  return authStateObs$().pipe(
    map(user => {
      if (user) {
        router.navigate(['/dashboard']);
        return false;
      }
      return true;
    })
  );
};
