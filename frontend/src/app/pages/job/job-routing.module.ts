import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobComponent } from './job.component';
import { JobCreateComponent } from './create/job-create.component';

const routes: Routes = [
  { path: '', component: JobComponent },
  { path: 'create', component: JobCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
