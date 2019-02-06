/*
  this is a showcase file, for testing that imports work properly.
 */

/**
 * Prints `hello world!` to the console, using `console.log`.
 */
export const putHelloWorld = () => console.log('hello world!');

/**
 * Prints `hello sunshine!` to the console, using `console.log`.
 */
export const putHelloSunshine = () => console.log('hello sunshine!');

/**
 * Puts a message to the console, using `console.log`.
 *
 * @param {string} message the message to `puts` to the `console`.
 */
export default (message: string) => console.log(message);
