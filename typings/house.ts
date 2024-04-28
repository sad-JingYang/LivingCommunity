export interface DataItem {
  building: string;
  gender: number;
  id: string;
  mobile: string;
  name: string;
  point: string;
  room: string;
  status: number;
}

export interface HouseResponse {
  code: number;
  data: DataItem[];
  message: string;
}
