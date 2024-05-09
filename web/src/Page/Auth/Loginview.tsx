import { Toaster } from "@/components/ui/toaster"
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const Registerview = ({handleSubmit,handleChange,values,errors}:any) => {
  return (
    <>
    <div className="flex items-center justify-center mt-[200px]">
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Sign Up into your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input onChange={handleChange} value={values.email} type='email' id="email" name='email' placeholder="ex : email@example.com" />                              {errors.email && (<p className="text-sm text-red-500">{errors.email}</p>)}

            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">password</Label>
              <Input onChange={handleChange} value={values.password} type='password' id="password" name='password' />
              {errors.password && (<p className="text-sm text-red-500">{errors.password}</p>)}

            </div>
          </div>
          <br />
          <CardFooter className="flex justify-between">
        <Button variant="outline"><Link to='/'>Cancel</Link></Button>
        <Button type="submit">Sign Up</Button>
      </CardFooter>
        </form>
      </CardContent>
      
    </Card>
  </div>
  <Toaster />
  </>
  )
}

export default Registerview