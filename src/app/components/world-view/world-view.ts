import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  NgZone,
  Input,
} from '@angular/core';
import { World } from 'src/app/models/world.model';

/**
 * Generated class for the WorldViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'world-view',
  templateUrl: 'world-view.html',
})
export class WorldViewComponent implements OnInit, OnDestroy {
  @ViewChild('worldView', { static: true }) canvasRef: ElementRef;
  running: boolean;
  width = 320;
  height = 240;

  @Input() public world: World;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.running = true;
    this.ngZone.runOutsideAngular(() => this.paint());
  }

  ngOnDestroy(): void {}

  paint(): void {
    // Check that we're still running.
    if (!this.running) {
      return;
    }

    // Paint current frame
    const ctx: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext(
      '2d',
    );

    // Draw background (which also effectively clears any previous drawing)
    ctx.fillStyle = 'rgb(221, 0, 49)';
    ctx.fillRect(0, 0, 800, 500);

    // Advance flock. This updates the positions of all objects.
    // this.flock.tick();

    // Draw flock
    ctx.beginPath();
    ctx.fillStyle = `rgb(0,0,0)`;
    ctx.clearRect(0, 0, this.width, this.height);
    /*
    for (const [x, y, speedX, speedY] of this.flock.boids) {
      const angle = Math.atan2(speedY, speedX) + 0.5 * Math.PI;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.scale(0.4, 0.4);
      // this.paintA(ctx);
      ctx.restore();
    };
    */
    // Schedule next
    requestAnimationFrame(() => this.paint());
  }
}
