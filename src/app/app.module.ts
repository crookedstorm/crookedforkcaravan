import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { ModalAboutus } from './aboutmodal/aboutmodal.component';
import { MenuBarComponent } from './menu/menubar.component';
import { OldProjComponent } from './oldproj/oldproj.component';

@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot() ],
  declarations: [ AppComponent,
                  ModalAboutus,
                  MenuBarComponent,
                  OldProjComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
