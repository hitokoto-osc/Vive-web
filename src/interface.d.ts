import { ReactElement } from "react";

interface IConfig {
  theme: "light" | "dark";
  container: string | Element;
  placeholder?: string;
  onSubmit?: (data: IViveData) => void;
}
