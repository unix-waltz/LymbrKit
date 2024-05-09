import { useToast } from "@/components/ui/use-toast"
import {useFormik} from 'formik'
import Loginview from './Loginview';
import * as yup from 'yup'
import Api from '@/Config/Api/Api';
const Login = () => {
  const { toast } = useToast()
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
      // console.log(result.data);

        toast({
          title: `${result.data.massage}`,
          description: "Your Login Session Seccesfully!",
        })
 
      } catch (error:any) {
      toast({
        title: `${error.response.data.massage}`,
        description: "Your Login Session Failed!",
      })
      }
 
    },
    validationSchema:yup.object({
      email:yup.string().required('Email is Required').email('Must Be Email !'),
      password:yup.string().required('Password is Required').min(8,'min 6 character'),
    })
})

  return (
    <Loginview {...{handleSubmit,values,handleChange,errors}} />
  );
}

export default Login;
