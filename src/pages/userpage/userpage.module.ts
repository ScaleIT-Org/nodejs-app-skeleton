import { NgModule } from "@angular/core";
import { IonicPageModule, IonicPage } from 'ionic-angular';
import { UserPage } from "./userpage";

@NgModule({
  declarations: [UserPage],
  imports: [IonicPageModule.forChild(UserPage)],
  entryComponents: [UserPage]
})
export class UserPageModule {}
