/* ===================== ตั้งค่า Firebase =====================
export const firebaseConfig = {
  apiKey: "AIzaSyAIafYqqP3I5C2LLXRR-MKQA2rD9I038ZM",
  authDomain: "virach-timesheet-935be.firebaseapp.com",
  projectId: "virach-timesheet-935be",
  storageBucket: "virach-timesheet-935be.firebasestorage.app",
  messagingSenderId: "1055030451624",
  appId: "1:1055030451624:web:6efa3e2d066bf4ee2c119d"
};
*/

/* อีเมลเจ้าของระบบ (แอดมินคนแรก) — ต้องตรงกับที่ระบุใน firestore.rules ด้วย */
export const ADMIN_EMAILS = ['laonapakult@gmail.com'];

/* จำกัดให้ล็อกอินได้เฉพาะโดเมนอีเมลบริษัท เช่น 'virach.co.th'  (เว้นว่าง '' = อนุญาตทุกบัญชี Google)
   ⚠ เป็นการตรวจฝั่งหน้าเว็บ ถ้าต้องการบังคับจริงให้เปิดบรรทัด domain ใน firestore.rules ด้วย */
export const ALLOWED_EMAIL_DOMAIN = '';
