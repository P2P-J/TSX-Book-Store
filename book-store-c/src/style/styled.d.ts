import "styled-components";

type ThemeName = "light" | "dark";
type ColorKey = "primary" | "background" | "secondary" | "third";

interface Theme {
  name: ThemeName;
  color: Record;
}

// styled-components의 DefaultTheme을 우리가 만든 Theme으로 확장
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
