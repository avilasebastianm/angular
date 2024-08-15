import {Component} from '@angular/core';
import {GifsService} from "../../../gifs/services/gifs.service";

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) {
  }

  public searchTag(tag: string) {
    this.gifsService.searchTag(tag)
  }

  get tags() {
    return this.gifsService.tagHistory;
  }
}
