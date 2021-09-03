import React,{useState} from 'react'
import style from './form.module.css';

export default function From() {
     
     const [name,setName]=useState("");
     const [email,setEmail]=useState("");
     const [password,setPassword]=useState("");


     const nameChange =(e)=>{
        setName (e.target.value);
     };

     const emailChange =(e)=>{
        setEmail(e.target.value);
     };

     const passwordChange =(e)=>{
        setPassword (e.target.value);
     };

     const handleSubmit =(e)=>{
        console.log("from is Submit")
        console.log(name,email,password)
        e.preventDefault();
     }



    return (
        <div>
            <h2> Registration </h2>

            <form action="" onSubmit={handleSubmit}>
                <div className={style.formGroup}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" value={name} onChange={nameChange} required />
                </div>

                <div className={style.formGroup}>
                     <label htmlFor="email">Email: </label>
                     <input type="email" name="email" id ="email" value={email} onChange={emailChange} required />
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="password">password: </label>
                    <input type="password" name="password" id="password" value={password} onChange={passwordChange} required />
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
