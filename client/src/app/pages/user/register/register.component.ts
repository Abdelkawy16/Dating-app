import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/providers/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cencelRegister = new EventEmitter();

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  constructor(private _accountService: AccountService) { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.registerForm);
    if (this.registerForm.valid) {
      this._accountService.register(this.registerForm.value).subscribe(
        response => {
          console.log(response);
          this.cancel();
        },
        err => console.log(err)
      )
    }
  }

  cancel() {
    this.cencelRegister.emit(false);
  }

}
