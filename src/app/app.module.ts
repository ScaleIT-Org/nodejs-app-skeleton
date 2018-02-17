import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Page2 } from "../pages/page2/page2";

@NgModule({
  declarations: [MyApp, HomePage, Page2],
  imports: [
    BrowserModule,
    IonicModule.forRoot(
      MyApp,
      {},
      // this enables deep linking, i.e. http://localhost:3000/#/page2
      {
        links: [
          { component: HomePage, name: "Home", segment: "home" },
          { component: Page2, name: "Page2", segment: "page2" }
        ]
      }
      // this enables deep linking - end
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, Page2],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}