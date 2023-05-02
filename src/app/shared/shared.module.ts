import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../users/effects/user.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user.reducer';
import { ListingComponent } from '../users/components/listing/listing.component';

@NgModule({
  declarations: [ListingComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ users: userReducer }),
    EffectsModule.forRoot(UserEffects),
    StoreDevtoolsModule.instrument({}),
  ],
  exports: [ListingComponent],
  providers: [],
})
export class SharedModule {}
