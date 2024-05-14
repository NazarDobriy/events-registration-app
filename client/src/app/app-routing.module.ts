import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'events/:id/participants',
    loadChildren: () =>
      import('../pages/participants/participants.module').then(
        (m) => m.ParticipantsModule
      ),
  },
  {
    path: 'events/:id/register/participant',
    loadChildren: () =>
      import('../pages/register-participant/register-participant.module').then(
        (m) => m.RegisterParticipantModule
      ),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
