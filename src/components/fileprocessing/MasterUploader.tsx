import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useDropzone } from "react-dropzone";
import { useRecoilState, useRecoilValue } from "recoil";
import { MasterFile } from "../../atoms/MasterFile";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const UploadMasterFile = () => {
  const { t } = useTranslation();
  const [masterFileData, setMasterFileData] = useRecoilState(MasterFile);
  const [fileName, setFileName] = useState("");

  const onDrop = (acceptedFiles: File[]) => {
    const reader = new FileReader();

    reader.onload = () => {
      const contents = reader.result as string;
      setMasterFileData(contents);
    };
    reader.readAsText(acceptedFiles[0]);
    setFileName(acceptedFiles[0].name);
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <Center boxSize={"3xs"} width={"100%"}>
        <div {...getRootProps()} style={{ fontWeight: "bold" }}>
          <input {...getInputProps()} />

          <Flex
            padding="4rem"
            flexDirection="column"
            display="flex"
            alignItems="center"
            _hover={{ cursor: "pointer" }}
          >
            <AiOutlineCloudUpload size={"3rem"} />
            <Text color="gray.600">
              {t("uploadpage.uploadmasterproperties")}
            </Text>
          </Flex>
        </div>
      </Center>
      <Box position="relative" padding="8">
        <Divider borderWidth={"2px"} />
        <AbsoluteCenter bg="white" px="4">
          or
        </AbsoluteCenter>
      </Box>
      <div
        {...getRootProps()}
        style={{
          fontWeight: "bold",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input {...getInputProps()} />

        <Flex
          flexDirection="column"
          display="flex"
          alignItems="center"
          py={"4rem"}
        >
          <Button colorScheme="blue">{t("uploadpage.browsefiles")}</Button>
        </Flex>
        <Text>{fileName}</Text>
      </div>
    </>
  );
};

const MasterFileUI = () => {
  return (
    <>
      <Box boxSize={"lg"} m={8} border={"2px dashed gray"}>
        <UploadMasterFile />
      </Box>
    </>
  );
};

export default MasterFileUI;
