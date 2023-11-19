import { themeCreator } from "../theme/base";
// import { DarkSpacesTheme as Theme } from "../theme/schema/DarkSpacesTheme";

import { Container, CssBaseline, ThemeProvider as TP } from "@mui/material";
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // const Theme = useAppSelector((state) => state.uiReducer.value.theme);
  const theme = themeCreator("DarkSpacesTheme");
  // console.log(theme);

  return (
    <TP theme={theme}>
      <CssBaseline />
      {children}
    </TP>
  );
};

export default ThemeProvider;
