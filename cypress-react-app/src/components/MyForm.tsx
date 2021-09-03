import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

function MyForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (isSubmitted === true) {
    return (
      <Stack spacing={4} direction="column" align="center">
        <Text>
          Thank you for submitting {firstName} {lastName}!
        </Text>
      </Stack>
    );
  }

  return (
    <Stack spacing={4} direction="column" align="center">
      <FormControl id="first-name" isRequired>
        <FormLabel>First name</FormLabel>
        <Input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
        />
      </FormControl>
      <FormControl id="last-name" isRequired>
        <FormLabel>Last name</FormLabel>
        <Input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last name"
        />
      </FormControl>
      <Button
        onClick={(e) => setIsSubmitted(true)}
        colorScheme="teal"
        size="md"
      >
        Submit
      </Button>
    </Stack>
  );
}

export default MyForm;
