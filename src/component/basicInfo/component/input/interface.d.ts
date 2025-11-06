interface IInputProps {
  name: string;
  code: string;
  value?: string;
  onChange: (code: string, v: string) => void;
}
