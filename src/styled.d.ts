import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    backgroundSubColor: string;
    textColor: string;
    accentColor: string;
  }
}
