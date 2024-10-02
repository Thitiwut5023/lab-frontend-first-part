import type { Organizer } from '@/types';
import axios from 'axios';

// สร้าง axios instance สำหรับการเรียกใช้ API
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,  // ใช้ BASE_URL จาก environment
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  // ฟังก์ชันสำหรับดึงรายการ organizers แบบแบ่งหน้า
  getOrganizers(perPage: number, page: number) {
    return apiClient.get(`/organizers?_limit=${perPage}&_page=${page}`);
  },
  
  // ฟังก์ชันสำหรับดึงข้อมูล organizer เดี่ยวโดยใช้ id
  getOrganizer(id: number) {
    return apiClient.get(`/organizers/${id}`);
  },

  // ฟังก์ชันสำหรับบันทึก (เพิ่ม) organizer ใหม่
  saveOrganizer(organizer: Organizer) {
    return apiClient.post('/organizers', organizer);
  }
}
