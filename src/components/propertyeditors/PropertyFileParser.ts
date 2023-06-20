import Property from "../../types/property";

const parsePropertyFile = (data: string): Map<string, string> => {
  let propertyMap = new Map<string, string>();

  const lines = data.split("\n");
  for (let line of lines) {
    line = line.trim();

    if (
      line &&
      !line.startsWith("#") &&
      !line.startsWith("!") &&
      !(line === "")
    ) {
      if (line.includes("=")) {
        const [key, value] = line.split("=", 2);
        propertyMap.set(key, value);
      }
    }
  }
  return propertyMap;
};

export default parsePropertyFile;
