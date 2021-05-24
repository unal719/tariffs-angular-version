import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AppModuleComponents } from './components';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, AppModuleComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
