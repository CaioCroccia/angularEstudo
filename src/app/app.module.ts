import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JurosSimplesComponentComponent } from './juros-simples-component/juros-simples-component.component';
import { JurosCompostoComponentComponent } from './juros-composto-component/juros-composto-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, JurosSimplesComponentComponent, JurosCompostoComponentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
