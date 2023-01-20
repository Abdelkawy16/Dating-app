import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Member } from 'src/app/models/member';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/providers/services/account.service';
import { MembersService } from 'src/app/providers/services/members.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm | undefined;
  @HostListener('window:beforeunload', ['$event']) unLoadNotification($event: any) {
    if (this.editForm?.dirty) {
      $event.returnValue = true;
    }
  }
  member: Member | undefined;
  user: User | undefined;

  constructor(private _accountService: AccountService, private _memberService: MembersService, private _toastr: ToastrService) {
    _accountService.currentUser$.pipe(take(1)).subscribe({
      next: user => {
        this.user = user;
        this.loadMember();
      }
    });
  }

  ngOnInit(): void {
  }

  loadMember() {
    if (!this.user) return;
    this._memberService.getMember(this.user.username).subscribe({
      next: member => this.member = member
    });
  }

  updateMember() {
    this._memberService.updateMember(this.editForm?.value).subscribe({
      next: _ => {
        this._toastr.success("Profile updated successfully");
        this.editForm?.reset(this.member);
      }
    })
  }

}
