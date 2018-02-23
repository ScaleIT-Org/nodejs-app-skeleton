import {HttpModule} from '@angular/http';
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { Observable } from "rxjs/Rx";
import {
  IonicApp,
  IonicErrorHandler,
  IonicModule
} from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { ScaleITApp } from "./app.component";

import { LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from "@angular/common";

@NgModule({
  declarations: [ScaleITApp],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(
      ScaleITApp,
      {}
      // remove # from the url - does not work without backend redirects and might only get fixed in ionic 4
      // { locationStrategy: "path" }
      // this enables deep linking, i.e. http://localhost:3000/user
      // {
      //   links: [
      //     { component: UserPage, name: "UserPage", segment: "user" },
      //     { component: AdminPage, name: "AdminPage", segment: "admin" }
      //   ]
      // }
    )
    // this enables deep linking - end
  ],
  bootstrap: [IonicApp],
  // declare your pages here (components used in templates will be loaded separately - as far as we know)
  entryComponents: [ScaleITApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppEntryPointModule {}
