export interface DataItem {
  id: string;
  content: string;
  createdAt: string;
  creatorName: string;
  title: string;
}

export interface ApiResponse {
  code: number;
  message: string;
  data: DataItem[];
}
