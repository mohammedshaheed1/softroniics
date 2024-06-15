
import React, { useState } from 'react'
import './Form.css'


function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    courcename1: "",
    university1: "",
    year1: "",
    courcename2: "",
    university2: "",
    year2: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
 
  };

  return (
    <>
    <div className='display'>
      <h2>Education</h2>
      <div className='basic1'>
        <input onChange={handleChange} name="name" type="text" className='all' placeholder='Name' value={data.name} />
        <input onChange={handleChange} name="email" type="email" className='all' placeholder='Email' value={data.email} />
      </div>
      <div>
        <button className='buttondesign all'>+</button>
      </div>
      <div className='basic2'>
        <input onChange={handleChange} name="courcename1" type="text" className='all' placeholder='Course name' value={data.courcename1} />
        <input onChange={handleChange} name="university1" type="text" className='all' placeholder='University' value={data.university1} />
        <input onChange={handleChange} name="year1" type="number" className='all' placeholder='Year' value={data.year1} />
        <button className='buttondesign1 all'>-</button>
      </div>
      <div className='basic3'>
        <input onChange={handleChange} name="courcename2" type="text" className='all' placeholder='Course name' value={data.courcename2} />
        <input onChange={handleChange} name="university2" type="text" className='all' placeholder='University' value={data.university2} />
        <input onChange={handleChange} name="year2" type="number" className='all' placeholder='Year' value={data.year2} />
        <button className='buttondesign2 all'>-</button>
      </div>
      <div>
        <button className='buttondesign3 all' onClick={handleSubmit}>Submit</button>
      </div>
      
    </div>
   
    </>
  );
}

export default Form;
