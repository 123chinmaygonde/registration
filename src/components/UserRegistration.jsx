import React ,{useState}from 'react'
import axios from 'axios'

const UserRegistration = () => {
    const[name,setName]=useState('')
    const[age,setAge]= useState('')
    const[dob,setDob]= useState('')
    const[password,setPassword]=useState('')
    const[gender,setGender]= useState('Male')
    const[about,setAbout]= useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const response =await axios.post('http://localhost:5000/api/users',{
                name,
                age:Number(age),
                dob,
                password,
                gender,
                about,
            })
            console.log('user created:',response.data)
            
        } catch (error) {
            console.log('error creating user:',error.response.data)
            
        }
    }
  return (
    <form onSubmit={handleSubmit}>
    <div>
        <label>Name:</label>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />
    </div>
    <div>
        <label>Age:</label>
        <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            min="0"
            max="120"
        />
    </div>
    <div>
        <label>Date of Birth:</label>
        <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
        />
    </div>
    <div>
        <label>Password:</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="10"
        />
    </div>
    <div>
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
        </select>
    </div>
    <div>
        <label>About:</label>
        <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            maxLength="5000"
        />
    </div>
    <button type="submit">Register</button>
</form>
  )
}

export default UserRegistration

