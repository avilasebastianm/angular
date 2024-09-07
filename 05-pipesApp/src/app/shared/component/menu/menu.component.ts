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
            routerLink: '/'
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink: '/numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: '/uncommon'


          },
        ]
      },


      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom Pipe',
            icon: 'pi pi-fw pi-cog',
            routerLink: '/custom'
          },

        ]
      },


    ];
  }
}
