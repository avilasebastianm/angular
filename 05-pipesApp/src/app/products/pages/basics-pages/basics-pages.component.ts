import {Component} from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrl: './basics-pages.component.css'
})
export class BasicsPagesComponent {
  public nameLower: string = "sebastian";
  public nameUpper: string = "SEBASTIAN";
  public fullName: string = "sEbaSTiAn aViLA";
  public customDate: Date = new Date();

}
