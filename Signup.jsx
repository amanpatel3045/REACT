import { Box, Container } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Spinner, Image } from "@chakra-ui/react";

import {
  Input,
  HStack,
  Checkbox,
  CheckboxGroup,
  Heading,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Divider, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Signup() {
  const initialvalues = { email: "", password: "" };
  const [inputValues, setInputValues] = useState(initialvalues);
  const [loading, setLoading] = useState(false);

  const handleChange = (inp) => {
    const { name, value } = inp.target;
    setInputValues({ ...inputValues, [name]: value });
    console.log(inputValues);
  };
  const handleSignup = (body) => {
    setLoading(true);
    fetch(`http://localhost:3000/User`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        alert("Signup successful");
      })
      .catch(() => alert("Duplicate username"))
      .finally(() => setLoading(false));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup(inputValues);
  };

  if (loading) {
    return (
      <Container mt={100}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Container>
    );
  }

  return (
    <>
      <Box width="40%" ml="10%">
        <Box>
          <Heading fontSize="xl" mt="12%" ml="-30%">
            Create Account
          </Heading>
          <Text mt="12%" ml="-39%">
            Email Address*
          </Text>
          <Input
            type="text"
            autoComplete="off"
            name="email"
            id="email"
            width="322px"
            mt="3%"
            placeholder="Email"
            onChange={handleChange}
            value={inputValues.email}
          />
        </Box>

        <Box ml="20%">
          <HStack mt="3%" spacing={14}>
            <Text>Create Password*</Text>
            <Text>Confirm Password*</Text>
          </HStack>

          <HStack mt="3%">
            <Input
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              width="160px"
              placeholder="Paasword"
              onChange={handleChange}
              value={inputValues.password}
            />
            <Input
              type="password"
              autoComplete="off"
              name="password2"
              id="password2"
              width="160px"
              placeholder="Confirm Password"
            />
          </HStack>
          <Box mt="23" bg="#f9fafc" h="10" w="322px">
            <Text fontSize="sm">
              <Checkbox size="sm" mt="1.5" defaultChecked mr="2"></Checkbox>
              Sign up today for <span font-weight="bold">
                exclusive offers
              </span>{" "}
              from Overstock.com delivered right to your inbox**
            </Text>
          </Box>
        </Box>
        <Button onClick={handleSubmit} width="322px" mt="3%" colorScheme="blue">
          Create Account
        </Button>
        <hr width="23px"></hr>
        <Button width="322px" mt="5%" colorScheme="gray">
          Continue as Guest
        </Button>

        <Text mt="4%">
          By creating an account or continuing as a Guest, you
        </Text>
        <Text>agree to our Terms & Conditions and Privacy Policy.</Text>

        <Text mt="3%">Terms & Conditions | Privacy Policy.</Text>
        <Text>**You can unsubscribe at any time</Text>
        <Box mt="76" ml="-50" height="229" width="300px" display="block">
          <Box textAlign="left">
            <Link>Return Policy</Link>
            <br></br>
            <Link>Contact Customer Care</Link>
            <br></br>
            <Link>FAQ</Link>
            <br></br>
            <Link>Privacy Policy</Link>
            <br></br>
            <Link>Site User Terms & Conditions*</Link>
            <br></br>
            <Text>
              © 2022 Overstock.com All Rights Reserved We self-certify
              compliance with:
            </Text>
            <Image src="https://ak1.ostkcdn.com/img/mxc/20200630-intl-privacy_shield.png" />
          </Box>
        </Box>
      </Box>
      <Stack direction="row" h="600px" p={4}>
        <Divider orientation="vertical" />
      </Stack>
    </>
  );
}

// bg="tomato"
export default Signup;
