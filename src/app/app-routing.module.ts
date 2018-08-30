import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';



const routes: Routes = [
  { path: '',
    redirectTo: 'hotels',
    pathMatch: 'full'
  },
  { path: 'hotels',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HotelListComponent
      },
      {
        path: ':id',
        component: HotelDetailComponent
      }
    ]
  },
  { path: '**',
    redirectTo: 'hotels'
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ]
})

export class AppRoutingModule {}
