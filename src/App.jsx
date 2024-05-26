import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Button, Flex, useColorMode } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
      <Box>
        <Flex justify="flex-end" p={4}>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
          </Button>
        </Flex>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
