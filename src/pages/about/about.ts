import { Component } from "@angular/core";
import { SharedDataService } from "../../providers/sharedData-service";

/*
  Generated class for the About page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: "page-about",
    templateUrl: "about.html"
})
export class AboutPage {
    constructor(public sharedDataProvider: SharedDataService) {}
}
