import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule, FIREBASE_APP_NAME, FIREBASE_OPTIONS } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Config2Provider } from './config1.provider';

import { Fb1RoutingModule } from './fb1-routing.module';
import { Fb1Component } from './fb1/fb1.component';

@NgModule({
  declarations: [Fb1Component],
  imports: [
    CommonModule,
    Fb1RoutingModule,
    AngularFireModule,
    AngularFirestoreModule
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useClass: Config2Provider },
    { provide: FIREBASE_APP_NAME, useValue: 'app2' }
  ]
})
export class Fb1Module {
}
