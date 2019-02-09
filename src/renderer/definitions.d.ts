/// <reference path="./../shared/definitions.d.ts"/>

/*
  this is where you put things like interfaces,
  that should only be used by the renderer process.
 */

/**
 * Module for `.png` files
 */
declare module '*.ico' {
  const fileName: string;
  export default fileName;
}

/**
 * Module for `.png` files
 */
declare module '*.png' {
  const fileName: string;
  export default fileName;
}

/**
 * Module for `.jpg` files
 */
declare module '*.jpg' {
  const fileName: string;
  export default fileName;
}

/**
 * Module for `.svg` files
 */
declare module '*.svg' {
  const fileName: string;
  export default fileName;
}
