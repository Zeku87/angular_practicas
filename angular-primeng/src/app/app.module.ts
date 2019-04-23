import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//primeNG solo se incluye a nivel de módulo y NO en el componente
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

/*En el array de estilos del angular json hay que incluir los siguientes
  "node_modules/primeicons/primeicons.css",
  "node_modules/primeng/resources/themes/nova-light/theme.css",
  "node_modules/primeng/resources/primeng.min.css",
*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ //a su vez debemos incluirlos aquí
    BrowserModule,
    MessagesModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
