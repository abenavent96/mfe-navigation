import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HelperService {

  private configJson: any;
  private parentRoute?: string;

  // Getters and setters
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  setConfigJson(configJson: any) { this.configJson = configJson; }
  getConfigJson() { return this.configJson; }
  setParentRoute(parent?: string) { this.parentRoute = parent; }
  getParentRoute() { return this.parentRoute; }

  // UTILS
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  resetContext() {
    this.configJson = undefined;
    this.parentRoute = undefined;
  }

}
