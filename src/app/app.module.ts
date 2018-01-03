import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { OptionsPage } from '../pages/options/options';
import { WorldsPage } from '../pages/worlds/worlds';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BabylonJsProvider } from '../providers/babylon-js/babylon-js';
import { ComponentsModule } from "../components/components.module";
import { WorldDetailPage } from "../pages/world-detail/world-detail";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    OptionsPage,
    WorldsPage,
    WorldDetailPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    OptionsPage,
    WorldsPage,
    WorldDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BabylonJsProvider
  ]
})
export class AppModule {}
