import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../authentication/service/auth-service';
import { inject } from '@angular/core';
import { Router } from 'express';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.isLoggedIn()){
    return true;
  }
  else {
    router.navigate(['authentication/signin'], {
        queryParams: { returnUrl: state.url }
    });
    return false;
  }
};
