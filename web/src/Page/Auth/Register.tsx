
import { Link } from 'react-router-dom';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const Register = () => {


  return (
    <div className="flex items-center justify-center mt-[200px]">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Sign Up into your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form >
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input id="username" name='username' placeholder="ex : username" />
                <p className="text-red-500"></p>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name='email' placeholder="ex : email@example.com" />
                <p className="text-red-500"></p>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline"><Link to='/'>Cancel</Link></Button>
          <Button type="submit">Sign Up</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Register;
