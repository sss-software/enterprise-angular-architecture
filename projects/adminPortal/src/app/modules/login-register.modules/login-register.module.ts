import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginRegisterRoutingModule } from "./login-register.routing.module";
import { CxiLoginComponent } from "./cxi-login/cxi-login.component";
import { CxiRegisterComponent } from "./cxi-register/cxi-register.component";
import { SharedModule } from "projects/shared-libs/src/lib/share.modules/shared.module";

@NgModule({
  declarations: [CxiLoginComponent, CxiRegisterComponent],
  imports: [CommonModule, LoginRegisterRoutingModule, SharedModule]
})
export class LoginRegisterModule {}
