import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../services/account.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _accountService:AccountService, private _toastr: ToastrService, private _router:Router){}

  canActivate(): Observable<boolean> {
    return this._accountService.currentUser$.pipe(
      map(user => {
        if(user) return true;
        this._toastr.error('You shall not pass!')
        this._router.navigateByUrl('/');
        return false;
      })
    )
  }
  
}
