import { WorldService } from './world.service';
import { TestBed, inject } from '@angular/core/testing';
import { Platform } from '@ionic/angular';

describe('WorldService', () => {
  let service: WorldService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        WorldService,
      ],
    });
  });
  beforeEach(inject([WorldService], _service => {
    service = _service;
  }));

  it('can create Worlds from a seed', done => {
    let world;
    service.createWorld('testmachin').subscribe(
      value => {
        world = value;
        expect(world).toBeDefined();
        console.dir(world);
      },
      error => {
        fail(error);
      },
    );
    done();
  });
  it('can create Chunks on demand', done => {
    done();
  });
});
