import { Flex, Divider, Box } from "@chakra-ui/react";
import EditablePropertyEditorWindow from "../components/propertyeditors/EditablePropertyEditorWindow";
import StaticPropertyEditorWindow from "../components/propertyeditors/StaticWindowEditor";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Translatorpage = () => {
  return (
    <>
      <Flex height={"100vh"} direction={"column"}>
        <Navbar />
        <Flex flex={1} overflowY={"hidden"} pt={4} gap={4}>
          <StaticPropertyEditorWindow />

          <Divider orientation={"vertical"} />
          <EditablePropertyEditorWindow />
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default Translatorpage;
