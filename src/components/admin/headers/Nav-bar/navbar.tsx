"use client";
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Popover,
  Separator,
  Text,
} from "@radix-ui/themes";
// import "@radix-ui/colors/mauve.css";
import classes from "./style.module.scss";
const Navbar = () => {
  return (
    <nav className={classes.nav_bar}>
      <Box width={"100%"}>
        <Flex align={"center"} width={"100%"} justify={"end"}>
          <Popover.Root>
            <Popover.Trigger>
              <span className="IconButton" aria-label="Update dimensions">
                <Avatar fallback="A"></Avatar>
              </span>
            </Popover.Trigger>
            <Popover.Content sideOffset={5} style={{ width: 250 }}>
              <Container>
                <Box>
                  <Flex align={"center"} gap={"3"}>
                    <Avatar fallback="A" />
                    <Text>Admin</Text>
                  </Flex>
                </Box>
                <Separator style={{ width: "100%", margin: "15px 0" }} />
                <Box>
                  <Button style={{ width: "100%" }}>Logout</Button>
                </Box>
              </Container>
            </Popover.Content>
          </Popover.Root>
        </Flex>
      </Box>
    </nav>
  );
};

export default Navbar;
