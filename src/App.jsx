import { useState } from "react"
import * as Yup from 'yup';
import { loginSchema } from "./schemas/loginSchema";



function App() {
  const styles = {
    divInput: "flex gap-2",
    input: "border-1 rounded-lg",
    textError: "text-red-500 font-medium"
  }

  const [form, setForm] = useState({
    email: "",
    password: "",
    day: "",
    age: ""
  })

  // const schema = Yup.object({
  //   email: Yup.string().email("รูปแบบอีเมลไม่ถูกต้อง").required("กรุณากรุณากรอกอีเมล"),
  //   password: Yup.string().min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัว").required("กรุณากรอกรหัสผ่าน")
  // })

  const [errors, setErrors] = useState({})

  
  const handleChange = (e)=> {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginSchema.validate(form, {abortEarly: false})
      alert("ส่งสำเร็จ");
      setErrors({});
    } catch(err) {
      console.log(err.inner);
      const errorObj = {}
      err.inner.forEach((error)=> {
        errorObj[error.path] = error.message;
      })
      console.log(errorObj);
      setErrors(errorObj);
    }


  }

 
  

  return (
    <>
     <p className="text-2xl font-bold pb-10">CC 20</p>
     <form className="space-y-2" onSubmit={handleSubmit}>
      <div className={styles.divInput}>
        <p>
          <label>อีเมล</label>
        <input 
        className={styles.input} 
        type="text" 
        name="email" 
        value={form.email}
        onChange={handleChange}
        />
        </p>
        <p className={styles.textError}>{errors.email}</p>
      </div>
      
      <div className={styles.divInput}>
        <p>
          <label>รหัสผ่าน</label>
          <input 
          className={styles.input} 
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          />
        </p>
        <p className={styles.textError}>{errors.password}</p>
      </div>
      <div className={styles.divInput}>
        <label>Day:</label>
        <input 
          className={styles.input} 
          type="number"
          name="day"
          value={form.day}
          onChange={handleChange}
        />
        <p className={styles.textError}>{errors.day}</p>
      </div>
      <div className={styles.divInput}>
        <label>Age:</label>
        <input 
          className={styles.input} 
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
        />
        <p className={styles.textError}>{errors.age}</p>
      </div>
      <button type="submit">สมัครสมาชิก</button>
     </form>
    </>
  )
}

export default App
