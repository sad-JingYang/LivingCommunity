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

export interface NotificationData {
  id: string;
  content: string;
  title: string;
  createdAt: string;
  creatorName: string;
}

export interface NotificationResponse {
  code: number;
  message: string;
  data: NotificationData;
}
