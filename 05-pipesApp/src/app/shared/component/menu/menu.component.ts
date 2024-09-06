import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',

})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] | undefined;

  ngOnInit() {
    this.menuItems = [
      {
        label: 'PipesApp',
        icon: 'pi pi-fw pi-home',
        items: [
          {
            label: 'textos y fechas',
            icon: 'pi pi-align-left',
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
          },
        ]
      },


      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'otro elemento',
            icon: 'pi pi-fw pi-cog',
          },
          {
            label: 'otro elemento',
            icon: 'pi pi-fw pi-cog',
          },
        ]
      },


    ];
  }
}
