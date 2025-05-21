import { useState, useRef } from "react"
import { signupSchema } from "../schemas/signupSchema"
import { yupToFormError } from "../utils/yupToFormErrors"

export default function SignupForm() {
    const styles = {
            divInput: "flex gap-2",
            input: "border-1 rounded-lg",
            textError: "text-red-500 font-medium"
        }
        
    const [form, setForm] = useState({
            username: "",
            nickname: "",
            password: "",
            confirmPassword: "",
            age: "",
            tel: "",
            terms: false
        })

    const refs = {
        username: useRef(null),
        nickname: useRef(null),
        password: useRef(null),
        confirmPassword: useRef(null),
        age: useRef(null),
        tel: useRef(null),
        terms: useRef(null)
    }

    const [errors, setErrors] = useState({})
    
    const handleChange = (e)=> {
        // setForm({...form, [e.target.name]: e.target.value})
        const {name, type, value, checked} = e.target;
        setForm((prev)=> ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(form);
        try {
            await signupSchema.validate(form, {abortEarly: false})
            // const isFormValid = await signupSchema.isValid(form, {abortEarly: false})
            

            // if (isFormValid) {
            //     console.log("ฟอร์มผ่าน!");
            //     } else {
            //     console.log("ฟอร์มไม่ผ่าน!");
            //     }


            alert("ส่งสำเร็จ");
            setErrors({});
        } catch(err) {
            const errorObj = yupToFormError(err, refs);
            setErrors(errorObj);
        }
    }
        
        
    return (
        <>
            <p className="text-2xl font-bold pb-10">CC 20 Signup Form</p>
            <form className="space-y-2" onSubmit={handleSubmit}>
            <div className={styles.divInput}>
                <p>
                    <label>ชื่อผู้ใช้:</label>
                    <input 
                    className={styles.input} 
                    type="text" 
                    name="username" 
                    value={form.username}
                    onChange={handleChange}
                    ref={refs.username}
                    />
                </p>
                <p className={styles.textError}>{errors.username}</p>
            </div>
            <div className={styles.divInput}>
                <p>
                    <label>ชื่อเล่น:</label>
                    <input 
                    className={styles.input} 
                    type="text" 
                    name="nickname" 
                    value={form.nickname}
                    onChange={handleChange}
                    ref={refs.nickname}
                    />
                </p>
                <p className={styles.textError}>{errors.nickname}</p>
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
                    ref={refs.password}
                    />
                </p>
                <p className={styles.textError}>{errors.password}</p>
            </div>
             <div className={styles.divInput}>
                <p>
                    <label>ยืนยันรหัสผ่าน</label>
                    <input 
                    className={styles.input} 
                    name="confirmPassword"
                    type="password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    ref={refs.confirmPassword}
                    />
                </p>
                <p className={styles.textError}>{errors.confirmPassword}</p>
            </div>
            <div className={styles.divInput}>
                <label>อายุ:</label>
                <input 
                    className={styles.input} 
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    ref={refs.age}
                />
                <p className={styles.textError}>{errors.age}</p>
            </div>
            <div className={styles.divInput}>
                <label>เบอร์โทร:</label>
                <input 
                    className={styles.input} 
                    type="number"
                    name="tel"
                    value={form.tel}
                    onChange={handleChange}
                    ref={refs.tel}
                />
                <p className={styles.textError}>{errors.tel}</p>
            </div>
             <div className={styles.divInput}>
                <label>ยอมรับเงื่อนไข:</label>
                <input 
                    className={styles.input} 
                    type="checkbox"
                    name="terms"
                    value={form.terms}
                    onChange={handleChange}
                    ref={refs.terms}
                />
                <p className={styles.textError}>{errors.terms}</p>
            </div>
            <button type="submit">สมัครสมาชิก</button>
            </form>
        </>
    )
}