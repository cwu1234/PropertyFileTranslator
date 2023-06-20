import { Flex, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Flex w={"100%"} boxShadow={"md"} p={4}>
      <Heading
        size={"md"}
        fontWeight={500}
        onClick={() => {
          navigate("/");
        }}
      >
        <Link to="/">{t("translatorpage.header")}</Link>
      </Heading>
    </Flex>
  );
};

export default Navbar;
