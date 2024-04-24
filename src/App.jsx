import axios from 'axios';
import React, { useState } from 'react'

export default function App() {
const [loading,setLoading] = useState(false);

   const SendMessage = (event) =>{
    setLoading(true)
    event.preventDefault();
    const token = "7166835479:AAGoURx4dH-h52x_sWqqf1nxEo6ikMgsxqA";
    const chat_id = -1002053357956;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value; 
    const surname = document.getElementById("surname").value; 
    const messageContent = `Ismi: ${name} \nFamiliyasi: ${surname}`
    axios({
      url:url,
      method:'POST',
      data:{
        "chat_id":chat_id,
        "text":messageContent,
      }
    }).then((res)=>{
      document.getElementById("myForm").reset();
      alert("Muvaffaqiyatli yuborildi")
    }).catch((error)=>{
      console.log("Yuborishda xatolik",error);
    }).finally(()=>{
      setLoading(false)
    })
   }
  return (
    <div>
      
      <form id="myForm" onSubmit={SendMessage}>
        <label htmlFor="">Name</label>
        <input type="text" id="name"/>
        <label htmlFor="">Surname</label>
        <input type="text" id="surname"/>
        <button type='submit' loading={loading}>{loading?"Yuborilmoqda...":"Yuborish"}</button>
      </form>
    </div>
  )
}
