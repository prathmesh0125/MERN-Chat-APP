import React from "react";
import {
  Box,
  Container,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
const Home = () => {
  return (
    <div>
      <Container maxw="xl" centerContent>
        <Box
          d="flex"
          justifyContent={"center"}
          alignItems={"center"}
          p={3}
          bg={"white"}
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px "
        >
          <Text
            fontSize={"4xl"}
            fontFamily="work sans"
            color={"Red"}
            textAlign={"Center"}
          >
            Lets Talk
          </Text>
        </Box>

        <Box
          bg="white"
          w="100%"
          p={4}
          borderRadius="lg"
          borderWidth="1px "
          color="black"
        >
          <Tabs variant="soft-rounded" colorScheme="pink">
            <TabList mb="1em">
              <Tab width="50%">Login</Tab>
              <Tab width="50%">Sign up </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
              <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
