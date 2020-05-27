import { NgModule } from '@angular/core';

import { JobRoutingModule } from './job-routing.module';

import { JobComponent } from './job.component';
import { JobCreateComponent } from './create/job-create.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
@NgModule({
  imports: [JobRoutingModule, NgZorroAntdModule, 
    CommonModule, 
    FormsModule, ReactiveFormsModule,],
  declarations: [JobComponent, JobCreateComponent],
  exports: [JobComponent, JobCreateComponent]
})
export class JobModule { }
