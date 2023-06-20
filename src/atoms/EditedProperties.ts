import { atom } from "recoil";

export const EditedProperties = atom({
  key: "editedProperties",
  default: new Map<string, string>(),
});
