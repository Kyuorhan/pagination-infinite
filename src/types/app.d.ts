declare module "*.svg" {
  import { SvgProps } from "react-native-svg";
  const content: React.FunctionComponent<SvgProps>;
  export default content;
}

// declare module "@env" {
//   export const EXPO_PUBLIC_CLIENT_ID: string;
//   export const EXPO_PUBLIC_CLIENT_SECRET: string;
// }

// declare module "react-shallow-renderer" {
//   import { ReactElement } from "react";

//   interface ShallowRenderer {
//     createRenderer(): {
//       render(element: ReactElement): void;
//       getRenderOutput(): ReactElement;
//     };
//   }

//   const ShallowRenderer: ShallowRenderer;
//   export default ShallowRenderer;
// }

declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.ttf";
