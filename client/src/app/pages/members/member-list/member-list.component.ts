import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/member';
import { MembersService } from 'src/app/providers/services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members$: Observable<Member[]>;

  constructor(private _memberService: MembersService) { }

  ngOnInit(): void {
    this.members$ = this._memberService.getMembers();
  }

  // loadMembers() {
  //   this._memberService.getMembers().subscribe({
  //     next: members => {
  //       this.members = members;
  //     }
  //   });
  // }

}
