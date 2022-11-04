import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  }

  registerToggle(){
    this.registerMode = !this.registerMode
  }
  
  cancelRegisterMode(event: boolean){
    this.registerMode = event
  }
}
