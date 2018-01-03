import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {
  Engine, Scene, FreeCamera, Light,
  Vector3, HemisphericLight, Mesh
} from 'babylonjs';
/**
 * Generated class for the GameComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'game',
  templateUrl: 'game.html'
})
export class GameComponent implements OnInit{
  engine: Engine;
  scene: Scene;
  camera: FreeCamera;
  light: Light;

  @ViewChild('aloneGame') canvasRef: ElementRef;
  text: string;

  constructor(private ngZone:NgZone) {
    console.log('Hello GameComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit(): void {
    this.engine = new Engine(this.canvasRef.nativeElement, false);
    this.scene = this.createScene(this.engine);
    this.ngZone.runOutsideAngular(
      () => this.engine.runRenderLoop(
        () => this.scene.render()
      )
    );
  }
  createScene(engine:Engine): Scene {

    // This creates a basic Babylon Scene object (non-mesh)
    const scene = new Scene(engine);

    // This creates and positions a free camera (non-mesh)
    this.camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    this.camera.setTarget(Vector3.Zero());

    // This attaches the camera to the canvas
    this.camera.attachControl(this.canvasRef.nativeElement, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    this.light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    this.light.intensity = 0.7;

    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    var sphere = Mesh.CreateSphere("sphere1", 16, 2, scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 1;

    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
    Mesh.CreateGround("ground1", 6, 6, 2, scene);
  console.log('scene created');
    return scene;
  }
  animate():void {
    this.ngZone.runOutsideAngular(() => this.scene.render());
  }
}
