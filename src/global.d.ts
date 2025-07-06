// src/global.d.ts
declare module '../Components/Home/Landing' {
    const Landing: React.ComponentType;
    export default Landing;
}
declare module '../Components/SponsorsComponent' {
    const SponsorsComponent: React.FC;
    export default SponsorsComponent;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _lenix?: any;
  }
}

export {};