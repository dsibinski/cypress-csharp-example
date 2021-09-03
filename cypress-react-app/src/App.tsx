import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import MyForm from "./components/MyForm";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid p={3}>
        <Text>Welcome to our test Cypress React app! 😎</Text>
        <ColorModeSwitcher justifySelf="flex-end" />
        <MyForm />
      </Grid>
    </Box>
  </ChakraProvider>
);
