import { Component, Inject, OnInit } from '@angular/core';
import { FIREBASE_OPTIONS } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(@Inject(FIREBASE_OPTIONS) private readonly fbOptions: any, private readonly afFire: AngularFirestore) {
  }

  ngOnInit(): void {
    console.log(this.fbOptions);
    this.afFire.collection('boards').valueChanges().subscribe(console.log);
  }

}
