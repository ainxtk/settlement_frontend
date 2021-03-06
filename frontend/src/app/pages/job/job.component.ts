import { Component, OnInit } from '@angular/core';
  
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UploadFile } from 'ng-zorro-antd/upload';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {
  listOfData = [
    {
      no: '1',
      invoice: 'Credit Card',
      date: '29/05/2020',
      amount: 4345.89 ,
      pr: 'Very Important'
    },
    {
      no: '2',
      invoice: 'Electricity Bill',
      date: '20/06/2020',
      amount: 5634.9,
      pr:'Important'
    },
    {
      no: '3',
      invoice: 'Iphone Invoice',
      date:'' ,
      amount: 89000,
      pr:'Not Important'
    }
  ];
  constructor(private http: HttpClient, private msg: NzMessageService) { }

}

