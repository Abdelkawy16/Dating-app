import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from 'src/app/models/member';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl

  constructor(private _http: HttpClient) { }

  getMembers() {
    return this._http.get<Member[]>(`${this.baseUrl}users`);
  }

  getMember(username:string){
    return this._http.get<Member>(`${this.baseUrl}users/${username}`);
  }

  updateMember(member: Member){
    return this._http.put(`${this.baseUrl}users`, member);
  }

}
