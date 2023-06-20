import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { BsGlobe } from "react-icons/bs";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Homepage = () => (
  <Flex height={"100vh"} justifyContent={"center"} flexDirection={"column"}>
    <Spacer flex={2} />
    <Flex flexDirection={"column"} alignItems={"center"} flex={5}>
      <Box>
        <Text fontSize="7xl">Tarigma Translation Tool</Text>
      </Box>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          <BsGlobe size="1.6em" />
        </MenuButton>
        <MenuList boxSize={"xs"} overflowY={"scroll"}>
          <TranslatorMenuButton title="English" language="en" />
          <TranslatorMenuButton title="Spanish (Español)" language="es" />
          <TranslatorMenuButton title="French (Français)" language="fr" />
          <TranslatorMenuButton title="German (Deutsch)" language="de" />
          <TranslatorMenuButton title="Portugese (Português)" language="pt" />
          <TranslatorMenuButton title="Arabic (عربي)" language="ar" />
          <TranslatorMenuButton
            title="Lithuanian (lietuvių kalba)"
            language="lt"
          />
          <TranslatorMenuButton title="Norwegian (norsk)" language="no" />
          <TranslatorMenuButton title="Polish (polski)" language="pl" />
          <TranslatorMenuButton title="Swedish (svenska)" language="sv" />
          <TranslatorMenuButton title="Filipino (Pilipino)" language="fil" />
          <TranslatorMenuButton title="Finnish (suomi)" language="fi" />
          <TranslatorMenuButton title="Hindi (हिन्दी)" language="hi" />
          <TranslatorMenuButton
            title="Indonesian (Bahasa Indonesia)"
            language="ind"
          />
          <TranslatorMenuButton title="Thai (ภาษาไทย)" language="th" />
        </MenuList>
      </Menu>
    </Flex>
  </Flex>
);

type TranslatorMenuButtonProps = {
  title: string;
  language: string;
};

const TranslatorMenuButton = (props: TranslatorMenuButtonProps) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  return (
    <MenuItem
      onClick={() => {
        i18n.changeLanguage(props.language);
        navigate("/upload");
      }}
    >
      <Text>{props.title}</Text>
    </MenuItem>
  );
};

export default Homepage;
