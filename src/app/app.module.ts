import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './ngrx/effects/index.effects';
import { StoreModule } from '@ngrx/store';
import { metaReducer } from './ngrx/reducers/index.reducer';
import { HttpClientModule } from '@angular/common/http';
import { HotelService } from './services/hotel.service';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    HotelDetailComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule,
    GridModule,
    EffectsModule.forRoot(effects),
    StoreModule.forRoot({reducer: metaReducer}),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
