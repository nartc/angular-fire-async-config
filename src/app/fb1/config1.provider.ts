import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class Config2Provider {
  constructor(private readonly route: ActivatedRoute) {
    let deepestChild: ActivatedRouteSnapshot = this.route.snapshot;
    while (deepestChild.firstChild != null) {
      deepestChild = deepestChild.firstChild;
    }

    return deepestChild.data['config'];
  }
}
