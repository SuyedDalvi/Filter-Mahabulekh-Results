import { Component, VERSION } from "@angular/core";
import * as b_data from "./../assets/barapada_snames.json";

import * as k_data from "./../assets/kalhe_snames.json";

import * as karnala_data from "./../assets/karnala_snames.json";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  b_snames = JSON.parse((b_data as any).d);
  k_snames = JSON.parse((k_data as any).d);
  karnala_snames = JSON.parse((karnala_data as any).d);
  foundNames = [];
  ngOnInit() {
    for (let name of this.karnala_snames) {
      if ((name.fullname as string).indexOf("अहमद") !== -1) {
        this.foundNames.push(name);
      }
    }
  }
}
