
import {useFormik} from 'formik'
import Registerview from './Registerview';
import * as yup from 'yup'
import Api from '@/Config/Api/Api';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
const Register = () => {
  const {toast} = useToast()
  const navigate = useNavigate()
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
console.log(error.response.data.massage);
        toast({
          title: `${error.response.data.massage}`,
          description: "Your Register Failed!",
        })
      }
 
    },
    validationSchema:yup.object({
      email:yup.string().required('Email is Required').email('Must Be Email !'),
      username:yup.string().required('Username is Required').min(6,'min 6 character'),
      password:yup.string().required('Password is Required').min(8,'min 8 character'),
    })
})

  return (
    <Registerview {...{handleSubmit,values,handleChange,errors}} />
  );
}

export default Register;
