import { NgModule } from '@angular/core';
import { GameComponent } from './game/game';
import { WorldViewComponent } from './world-view/world-view';
@NgModule({
	declarations: [
	  GameComponent,
    WorldViewComponent
  ],
	imports: [],
	exports: [
	  GameComponent,
    WorldViewComponent
  ]
})
export class ComponentsModule {}
