import type * as THREE from "three";

declare global {
  interface Window {
    VANTA: {
      FOG: (options: {
        el: HTMLElement;
        THREE: typeof THREE;
        [key: string]: any;
      }) => {
        destroy: () => void;
      };
    };
  }
}

export {};
