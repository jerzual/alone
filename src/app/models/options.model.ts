export interface Options {
  debug: boolean;
  wireframe: boolean;
  lights: boolean;
  nightMode: boolean;
  worldGen: {

  },
  difficulty: number;
}

export function getDefaultOptions(): Options {
  return {
    debug: false,
    wireframe: true,
    nightMode: false,
    lights: true,
    worldGen: {},
    difficulty: .5
  }
}
