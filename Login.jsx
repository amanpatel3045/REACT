import { Container, filter, Heading, Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Box, Button, Link } from "@chakra-ui/react";
import { useState } from "react";
import { Spinner } from "@chakra-ui/react";
const Login = () => {
  const initialvalues = { email: "", password: "" };
  const [inputValues, setInputValues] = useState(initialvalues);
  const [loading, setLoading] = useState(false);

  const handleChange = (inp) => {
    let { name, value } = inp.target;
    setInputValues({ ...inputValues, [name]: value });
    console.log(inputValues);
  };
  const handleLogin = () => {
    setLoading(true);
    fetch(`http://localhost:3000/User`)
      .then((res) => res.json())
      .then((data) => {
        let filterData = data.filter((elm) => {
          return (
            elm.email == inputValues.email &&
            elm.password === inputValues.password
          );
        });
        if (filterData.length == 0) throw Error;
      })
      .catch(() => alert("Duplicate username"))
      .finally(() => setLoading(false));
  };
  if (loading) {
    return (
      <Container mt={10}>
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
      <Box width="40%">
        <Heading fontSize="xl" mt="12%" ml="-30%">
          Sign In
        </Heading>
        <Text mt="12%" ml="-39%">
          Email Address*
        </Text>
        <Input
          name="email"
          type="text"
          autoComplete="off"
          mt="3%"
          width="322px"
          placeholder="Email"
          onChange={handleChange}
          value={inputValues.email}
        />
        <Text mt="3%" ml="-45%">
          Password*
        </Text>
        <Input
          name="password"
          type="password"
          autoComplete="off"
          mt="3%"
          width="322px"
          placeholder="Paasword"
          onChange={handleChange}
          value={inputValues.password}
        />
        <hr width="23px"></hr>
        <Button mt="7%" width="322px" colorScheme="green" onClick={handleLogin}>
          Sign In
        </Button>
        <br></br>
        <Link mt="3%" color="blue">
          Forgot your password?
        </Link>
      </Box>
    </>
  );
};

export default Login;
