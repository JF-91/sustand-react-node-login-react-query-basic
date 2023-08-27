import React,{ useState} from 'react'
import { loginRequest, profileRequest } from '../api/auth';
import { useAuthStore } from '../store/auth';

interface UserType{
    email: string;
    password: string;

}

const LoginPage = () => {

    const [data, setData] = useState<UserType>({
        email:"",
        password:""
    })

    const setToken = useAuthStore(state=>state.setToken)
    const setProfile = useAuthStore(state=> state.setProfile)

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        
        const {email, password} =  data
      const resLogin =  await loginRequest(email, password);
        setToken(resLogin.data.token)

        const resProfile = await profileRequest()
        setProfile( resProfile.data.profile )
  
        
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{

       const { value} = e.target
        setData({
            email: value,
            password: value
        })
    }

  return (
    <div>
        <form  onSubmit={handleSubmit} >
            <input onChange={handleChange} type="email" name="email" id="email"  placeholder='Email'/>
            <input onChange={ handleChange} type="password" name="password" id="password" placeholder='Password'/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default LoginPage