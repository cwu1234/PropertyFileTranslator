import { Button, Flex } from "@chakra-ui/react";
import { CgExport } from "react-icons/cg";
import { saveAs } from "file-saver";
import { useRecoilValue } from "recoil";
import { EditedProperties } from "../atoms/EditedProperties";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const map = useRecoilValue(EditedProperties);
  const saveFile = () => {
    let fileContent = "";

    for (let [key, value] of map.entries()) {
      console.log(key, value);
      fileContent = fileContent.concat(key);
      fileContent = fileContent.concat("=");
      fileContent = fileContent.concat(value);
      fileContent = fileContent.concat("\n");
    }

    const blob = new Blob([fileContent], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "editedFile.properties");
  };

  return (
    // top border
    <Flex w={"100%"} p={4} borderTopColor={"gray.200"} borderTopWidth={2}>
      <Flex flex={1} />
      <Button
        colorScheme={"blue"}
        size={"sm"}
        rightIcon={<CgExport />}
        onClick={saveFile}
      >
        {t("translatorpage.export")}
      </Button>
    </Flex>
  );
};

export default Footer;
