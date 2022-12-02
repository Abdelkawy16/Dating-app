import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AccountService } from '../../providers/services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });
  // currentUser$: Observable<User>;

  constructor(public _accountService: AccountService, private _router: Router, private _toastr: ToastrService) { }

  ngOnInit(): void {
    // this.currentUser$ = this._accountService.currentUser$
  }

  login() {
    if (this.loginForm.valid) {
      this._accountService.login(this.loginForm.value).subscribe(
        response => {
          this._router.navigateByUrl("/members");
          console.log(response);
        },
        err => {
          console.log(err);
          this._toastr.error(err.error, "Error!");
        }
      )
    }
  }

  logout() {
    this._accountService.logout();
    this._router.navigateByUrl("/");
  }
}
