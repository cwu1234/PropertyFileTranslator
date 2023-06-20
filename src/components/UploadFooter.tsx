import { Button, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { BsArrowBarRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const UploadFooter = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Flex w={"100%"} p={4} borderTopColor={"gray.200"} borderTopWidth={2}>
      <Flex flex={1} />
      <Button
        colorScheme={"blue"}
        size={"sm"}
        rightIcon={<BsArrowBarRight />}
        onClick={() => {
          navigate("/translator");
        }}
      >
        {t("uploadpage.continuetotranslator")}
        {/* disable this button until required files are uploaded */}
      </Button>
    </Flex>
  );
};

export default UploadFooter;
