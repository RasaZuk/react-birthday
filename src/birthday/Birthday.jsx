import { useState } from "react";

export function Birthday() {

   const [birthDate, setBirthDate] = useState('');
   console.log(birthDate);

   const handleChangeDate = (e) => {
    setBirthDate(e.target.value);
   };
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log('button submit');
   };


    return (
        <>
          <form onSubmit={handleSubmit}>
            <input value={birthDate} type="date" onChange={handleChangeDate}/>
            <button disabled={!birthDate} type="submit">Skaičiuoti metus</button>
        </form>
        <div>
            <h2>Tau yra: metų</h2>
        </div>
        <div>
            <h1>Iki gimimo dienos tau liko dienų 🎂🍾💐</h1>
        </div>
        </>

);
}