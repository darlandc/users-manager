import { BrowserModule } from '@angular/platform-browser';
import { ListingComponent } from './services/listing/listing.component';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../state/users/effects/user.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../state/users/reducers/user.reducer';

@NgModule({
  declarations: [ListingComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ users: userReducer }),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({}),
  ],
  exports: [ListingComponent],
  providers: [],
})
export class SharedModule {}
