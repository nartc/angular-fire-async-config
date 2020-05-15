import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-fb1',
  template: `
    <p>
      fb1 works!
    </p>
  `,
  styles: []
})
export class Fb1Component implements OnInit {

  constructor(private readonly afFire: AngularFirestore) {
  }

  ngOnInit(): void {
    console.log(this.afFire);
    this.afFire.collection('orders').valueChanges().subscribe(console.log);
  }

}
