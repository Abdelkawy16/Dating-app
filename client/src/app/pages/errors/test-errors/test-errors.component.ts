import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  baseUrl = "https://localhost:5001/api/";
  validationErrors: string[] = [];

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }

  get404Error() {
    this._http.get(`${this.baseUrl}buggy/not-found`).subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.log(err);
      }
    )
  }

  get400Error() {
    this._http.get(this.baseUrl + "buggy/bad-request").subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.log(err);
      }
    )
  }

  get500Error() {
    this._http.get(this.baseUrl + "buggy/server-error").subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.log(err);
      }
    )
  }

  get401Error() {
    this._http.get(this.baseUrl + "buggy/auth").subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.log(err);
      }
    )
  }

  get400ValidationError() {
    this._http.post(this.baseUrl + "account/register", {}).subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.log(err);
        this.validationErrors = err;
      }
    )
  }

}
