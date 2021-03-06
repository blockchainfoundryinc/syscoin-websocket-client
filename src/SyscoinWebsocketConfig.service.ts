import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { SyscoinWebsocketConstructorProps } from "./index";

@Injectable()
export class SyscoinWebsocketConfigService {
  public url: string;
  public address: string;
  public configComplete: BehaviorSubject<SyscoinWebsocketConstructorProps> = new BehaviorSubject(null);

  constructor() {
  }

  configure(url, address) {
    this.url = url;
    this.address = address;
    this.configComplete.next({ url: this.url, address: this.address });
  }
}
