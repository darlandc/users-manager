import { BrowserModule } from '@angular/platform-browser';
import { ListingComponent } from './services/listing/listing.component';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../state/users/effects/user.effects';

@NgModule({
  declarations: [ListingComponent],
  imports: [BrowserModule, EffectsModule.forRoot([UserEffects])],
  exports: [ListingComponent],
  providers: [],
})
export class SharedModule {}
