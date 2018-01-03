import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorldsPage } from './worlds';

@NgModule({
  declarations: [
    WorldsPage,
  ],
  imports: [
    IonicPageModule.forChild(WorldsPage),
  ],
})
export class WorldsPageModule {}
