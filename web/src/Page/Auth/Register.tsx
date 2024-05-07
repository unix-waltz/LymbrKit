
import {useFormik} from 'formik'
import Registerview from './Registerview';
import * as yup from 'yup'
import Api from '@/Config/Api/Api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Register = () => {
  const navigate = useNavigate()
  const [alerts,setAlert] = useState('');
const {handleSubmit,values,handleChange,errors} = useFormik({
    initialValues:{
        email:'',
        username:'',
        password:''
    },
    onSubmit:async e=>{
      const {email,username,password} = e
      try {
             const result = await Api.post('/auth/register',{
        email:email,
        username:username,
        password:password
      })
      if(result.data.succes) return navigate('/login')
      } catch (error:any) {
      setAlert(error.response.data.massage)
      }
 
    },
    validationSchema:yup.object({
      email:yup.string().required('Email is Required').email('Must Be Email !'),
      username:yup.string().required('Username is Required').min(6,'min 6 character'),
      password:yup.string().required('Password is Required').min(8,'min 6 character'),
    })
})

  return (
    <Registerview {...{alerts,handleSubmit,values,handleChange,errors}} />
  );
}

export default Register;
