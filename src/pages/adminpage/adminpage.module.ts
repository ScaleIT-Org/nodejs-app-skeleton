import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { AdminPage } from "./adminpage";

@NgModule({
  declarations: [AdminPage],
  imports: [IonicPageModule.forChild(AdminPage)],
  bootstrap: [AdminPage]
})
export class AdminPageModule {}
