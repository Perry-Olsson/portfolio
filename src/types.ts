export interface Coordinate {
  x: number;
  y: number;
  z: number;
}

//return true to run on next re-route
export type TeardownFunction = () => boolean;
