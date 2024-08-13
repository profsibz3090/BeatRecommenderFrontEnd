import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import axios from "axios"
import LoadingIndicator from "../../../utilities/LoadingIndicator"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

export default function LoginPage() {
  const [loginData, setloginData] = useState({});
  const [selectedProfession, setSelectedProfession] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (event) => {
    setloginData({ ...signInData, [event.target.name]: event.target.value });
  };

  const handleProfessionChange = (value) => {
    setSelectedProfession(value);
  };

  const loginUser = async () => {
    try {
      setIsLoading(true)
      const jsonString = JSON.stringify({
        username: signInData.username,
        email: signInData.email,
        password: signInData.password,
        profession: selectedProfession
      })
      
      const res = await axios.post('https://beatrecommendersystembackend.onrender.com/users/', jsonString, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
     if (res.status == 200) {
        toast.success('signup successful you can now login')
     } else {
      toast.error('something went wrong try again')
     }
      
    } catch (error) {
      toast.error(error);
    }
    setIsLoading(false)
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your login details.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
        <div className="grid gap-2">
            <Label htmlFor="profession">Profession</Label>
            <Select onValueChange={handleProfessionChange}>
              <SelectTrigger id="profession">
                <SelectValue placeholder="Select profession" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Rapper">Rapper</SelectItem>
                <SelectItem value="Producer">Producer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" name="username" placeholder="username" onChange={handleInputChange} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" defaultValue="user@example.com" onChange={handleInputChange} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" onChange={handleInputChange} required />
          </div>
        </CardContent>
        <CardFooter className='flex-col'>
        <Button className="w-full" onClick={() => {
            console.log({...signInData, profession:selectedProfession});
            signUpUser()
          }}>{isLoading? <LoadingIndicator/> : 'Login'}</Button>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="underline">
              SignUp
            </Link>
        </div>
        </CardFooter>
      </Card>
    </div>
  );
}
