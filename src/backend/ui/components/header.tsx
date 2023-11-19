import {
  Box,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  alpha,
  lighten,
  styled,
  useTheme,
} from "@mui/material";
import HeaderUserbox from "./UserBox";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
const HeaderWrapper = styled(Box)(
  ({ theme }) => `
          height: ${theme.header.height};
          color: ${theme.header.textColor};
          padding: ${theme.spacing(0, 2)};
          right: 0;
          z-index: 6;
          background-color: ${alpha(theme.header.background || "", 0.95)};
          backdrop-filter: blur(3px);
          position: fixed;
          justify-content: space-between;
          width: 100%;
          @media (min-width: ${theme.breakpoints.values.lg}px) {
              left: ${theme.sidebar.width};
              width: auto;
          }
  `
);
const Header = ({
  open,
  changeOpen,
}: {
  open: boolean;
  changeOpen: () => any;
}) => {
  const theme = useTheme();
  // const dispatch = useAppDispatch()
  // const open = useAppSelector(state => state.uiReducer.value.navbar)
  // const Theme = useAppSelector(state => state.uiReducer.value.theme)

  return (
    <HeaderWrapper
      display="flex"
      alignItems="center"
      sx={{
        boxShadow:
          theme.palette.mode === "dark"
            ? `0 1px 0 ${alpha(
                lighten(theme.colors.primary.main, 0.7),
                0.15
              )}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
            : `0px 2px 8px -3px ${alpha(
                theme.colors.alpha.black[100],
                0.2
              )}, 0px 5px 22px -4px ${alpha(
                theme.colors.alpha.black[100],
                0.1
              )}`,
      }}
    >
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        alignItems="center"
        spacing={2}
      ></Stack>
      <Box display="flex" alignItems="center">
        <HeaderUserbox user={{}} />
        <Box
          component="span"
          sx={{
            ml: 2,
            display: { lg: "none", xs: "inline-block" },
          }}
        >
          <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={changeOpen}>
              {!open ? (
                <MenuTwoToneIcon fontSize="small" />
              ) : (
                <CloseTwoToneIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </HeaderWrapper>
  );
};

export default Header;