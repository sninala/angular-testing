import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { BlueColorDirective } from './blue-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ProductComponent,
    BlueColorDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'\counter',
        component: CounterComponent
      },
      {
        path:'\product',
        component: ProductComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
