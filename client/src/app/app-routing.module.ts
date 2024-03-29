import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './pages/lists/lists.component';
import { MemberDetailComponent } from './pages/members/member-detail/member-detail.component';
import { MemberListComponent } from './pages/members/member-list/member-list.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './providers/guards/auth.guard';
import { TestErrorsComponent } from './pages/errors/test-errors/test-errors.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { ServerErrorComponent } from './pages/errors/server-error/server-error.component';
import { MemberEditComponent } from './pages/members/member-edit/member-edit.component';
import { PreventUnsavedChangesGuard } from './providers/guards/prevent-unsaved-changes.guard';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {path:"", runGuardsAndResolvers:"always", canActivate:[AuthGuard], children:[
    { path: "members", component: MemberListComponent },
    { path: "members/:username", component: MemberDetailComponent },
    { path: "member/edit", component: MemberEditComponent, canDeactivate:[PreventUnsavedChangesGuard] },
    { path: "lists", component: ListsComponent },
    { path: "messages", component: MessagesComponent },
  ]},
  {path:'errors', component: TestErrorsComponent},
  {path:'not-found', component: NotFoundComponent},
  {path:'server-error', component: ServerErrorComponent},
  { path: "**", component: NotFoundComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
