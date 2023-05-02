import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './state/users.reducer';
import { ListingComponent } from './components/listing/listing.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './state/effects/users.effects';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ListingComponent],
  imports: [
    BrowserModule,
    StoreModule.forFeature('users', usersReducer),
    EffectsModule.forRoot([UsersEffects]),
    StoreDevtoolsModule.instrument({}),
  ],
  exports: [ListingComponent],
})
export class UsersModule {}
