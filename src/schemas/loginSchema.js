 import * as Yup from 'yup';
 
 export const loginSchema = Yup.object({
    email: Yup.string()
    .email("รูปแบบอีเมลไม่ถูกต้อง")
    .required("กรุณากรุณากรอกอีเมล"),
    // password: Yup.string().min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัว").required("กรุณากรอกรหัสผ่าน")
    password: Yup.string()
    .min(6, ({path, value})=> `${path} ต้องมีอย่างน้อย 6 ตัว ตอนนี้มีแค่ ${value.length}`)
    .required("กรุณากรอกรหัสผ่าน")
  })