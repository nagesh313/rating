import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RatingComponent } from './rating/rating.component';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule, NgbModule, HttpClientModule, FormsModule
  ],
  providers: [],
  entryComponents: [
    RatingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const ratingComp = createCustomElement(RatingComponent, { injector });
    customElements.define('app-rating', ratingComp);
  }
  ngDoBootstrap() {

  }
}
