import { Flex, Heading, Spacer } from "@chakra-ui/react";
import MasterUploader from "../components/fileprocessing/MasterUploader";
import PropertyUploader from "../components/fileprocessing/PropertyUploader";
import UploadFooter from "../components/UploadFooter";
import { useTranslation } from "react-i18next";

const Uploadpage = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Flex
        height={"100vh"}
        flexDirection={"column"}
        justifyContent={"flex-start"}
      >
        <Heading p={10} flex={1}>
          {t("uploadpage.header")}
        </Heading>
        <Flex flex={8} justifyContent={"space-around"}>
          <MasterUploader />
          <PropertyUploader />
        </Flex>
        <UploadFooter />
      </Flex>
    </>
  );
};

export default Uploadpage;
