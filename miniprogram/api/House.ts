import { DataItem } from 'typings/house';
import http from '../service/request';

export function FetchMyRoom() {
  return http<DataItem[]>({ url: `/room`, method: 'GET' });
}