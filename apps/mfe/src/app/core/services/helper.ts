import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HelperService {

  private configJson: any;

  // Getters and setters
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  setConfigJson(configJson: any) { this.configJson = configJson; }
  getConfigJson() { return this.configJson; }

  // UTILS
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  resetContext() {
    this.configJson = undefined;
  }

}
