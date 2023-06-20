import {
  Box,
  Flex,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  background,
} from "@chakra-ui/react";

import parsePropertyFile from "./PropertyFileParser";
import { useRecoilState, useRecoilValue } from "recoil";
import { MasterFile } from "../../atoms/MasterFile";
import { useDropzone } from "react-dropzone";
import UploadMasterFile from "../fileprocessing/MasterUploader";
import { useTranslation } from "react-i18next";

const TranslationRow = ({ rowKey, rowValue }: any) => {
  return (
    <Tr>
      <Td>
        <Input fontWeight={"bold"} size={"xs"} disabled value={rowKey} />
      </Td>
      <Td>
        <Input size={"xs"} disabled value={rowValue} />
      </Td>
    </Tr>
  );
};

const StaticPropertyEditorWindow = () => {
  const { t } = useTranslation();
  const fileData = useRecoilValue(MasterFile);
  const mapped: Map<string, string> = parsePropertyFile(fileData);

  const tRows = [];
  for (let [key, value] of mapped.entries()) {
    tRows.push(<TranslationRow key={key} rowKey={key} rowValue={value} />);
  }

  return (
    <>
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        flex={1}
        width={"100%"}
      >
        <Box w={"100%"} h={"100%"} overflowY={"scroll"}>
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>{t("translatorpage.key")}</Th>
                  <Th>{t("translatorpage.translation")}</Th>
                </Tr>
              </Thead>
              <Tbody>{tRows}</Tbody>
              <Tfoot>
                <Tr>
                  <Th>{t("translatorpage.key")}</Th>
                  <Th>{t("translatorpage.translation")}</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </>
  );
};

export default StaticPropertyEditorWindow;
