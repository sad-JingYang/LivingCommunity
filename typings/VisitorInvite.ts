export interface DataItem {
  id: string;
  name: string;
}

export interface ResponseData {
  code: number;
  data: DataItem[];
  message: string;
}
