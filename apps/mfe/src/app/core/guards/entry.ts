import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HelperService } from '../services/helper';

@Injectable({
  providedIn: 'root'
})
export class EntryGuard implements CanActivate {

  constructor(
    private router: Router,
    private helper: HelperService
  ) { }

  canActivate() {
    fetch('/assets/multimap-config.json')
      .then(res => res.json())
      .then(res => this.helper.setConfigJson(res))
      .catch(err => { console.log(err)});
    return true;
  }

}
