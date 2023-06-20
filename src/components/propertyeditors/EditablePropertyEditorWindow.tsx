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
} from "@chakra-ui/react";

import parsePropertyFile from "./PropertyFileParser";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { MasterFile } from "../../atoms/MasterFile";
import { PropertyFile } from "../../atoms/PropertyFile";
import { EditedProperties } from "../../atoms/EditedProperties";
import { useTranslation } from "react-i18next";

const TranslationRow = ({ rowKey, rowValue }: any) => {
  const [value, setValue] = useState(rowValue);
  const [key, setKey] = useState(rowKey);

  const [properties, setProperties] = useRecoilState(EditedProperties);
  const hasChangedFromOriginal = () => {
    return value !== rowValue && value !== "";
  };

  const isInvalid = () => {
    return value === "";
  };

  return (
    <Tr>
      <Td>
        <Input fontWeight={"bold"} size={"xs"} disabled value={rowKey} />
      </Td>
      <Td>
        <Input
          isInvalid={isInvalid()}
          borderColor={hasChangedFromOriginal() ? "green.300" : "gray.300"}
          errorBorderColor="red.300"
          size={"xs"}
          bgColor={
            isInvalid()
              ? "red.100"
              : hasChangedFromOriginal()
              ? "green.50"
              : "white"
          }
          defaultValue={rowValue}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onBlur={(e) => {
            const targetValue = e.target.value;

            let editedProperties = properties;

            editedProperties.set(key, targetValue);
            setProperties(editedProperties);
          }}
        />
      </Td>
    </Tr>
  );
};

const createCommonPropertyMap = (
  masterMap: Map<string, string>,
  propertyMap: Map<string, string>
): Map<string, string> => {
  let commonPropertyMap = new Map<string, string>();

  for (let key of masterMap.keys()) {
    commonPropertyMap.set(key, "");
  }
  for (let key of propertyMap.keys()) {
    if (commonPropertyMap.has(key))
      commonPropertyMap.set(key, propertyMap.get(key) as string);
  }
  return commonPropertyMap;
};

const EditablePropertyEditorWindow = () => {
  const { t } = useTranslation();
  const PFD = parsePropertyFile(useRecoilValue(PropertyFile));
  const MFD = parsePropertyFile(useRecoilValue(MasterFile));

  const mapped: Map<string, string> = createCommonPropertyMap(MFD, PFD);

  const [properties, setProperties] = useRecoilState(EditedProperties);

  useEffect(() => {
    setProperties(mapped);
  }, []);

  const [tRows, setTRows] = useState<JSX.Element[]>([]);

  useEffect(() => {
    let rows = [];
    for (let [key, value] of mapped.entries()) {
      rows.push(<TranslationRow key={key} rowKey={key} rowValue={value} />);
    }
    setTRows(rows);
  }, [setTRows]);

  return (
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
  );
};

export default EditablePropertyEditorWindow;
