
import {useFormik} from 'formik'
import Loginview from './Loginview';
import * as yup from 'yup'
import Api from '@/Config/Api/Api';
import { useState } from 'react';
const Login = () => {
  const [alerts,setAlert] = useState('');
const {handleSubmit,values,handleChange,errors} = useFormik({
    initialValues:{
        email:'',
        password:''
    },
    onSubmit:async e=>{
      const {email,password} = e
      try {
             const result = await Api.post('/auth/login',{
        email:email,
        password:password
      }, {
        withCredentials: true
      })
      console.log(result.data)
      } catch (error:any) {
      setAlert(error.response.data.massage)
      }
 
    },
    validationSchema:yup.object({
      email:yup.string().required('Email is Required').email('Must Be Email !'),
      password:yup.string().required('Password is Required').min(8,'min 6 character'),
    })
})

  return (
    <Loginview {...{alerts,handleSubmit,values,handleChange,errors}} />
  );
}

export default Login;
