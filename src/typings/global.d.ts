declare module "*.less";
declare module "*.png";

type TFn = (...args: any[]) => any;

interface IRef<T extends Record<string, any> = any> {
  getData: () => T;
}

interface IViveData {
  name: string;
  site: string;
  comment: string;
  email: string;
}
