/*
 * Extra typings definitions
 */

// Allow .json files imports
declare module '*.json';

// SystemJS module definition
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// Extend the global Window interface to include `env`
interface Window {
  env: {
    [key: string]: any;
  };
}

declare module 'chart.js';
