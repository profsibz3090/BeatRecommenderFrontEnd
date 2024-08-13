import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function SignPage() {
  return (
    (
        <div className="flex justify-center items-center min-h-screen">
            <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription>Enter your information to create an account.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="username" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" defaultValue="user@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="profession">Profession</Label>
          <Select>
            <SelectTrigger id="profession">
              <SelectValue placeholder="Select profession" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rapper">Rapper</SelectItem>
              <SelectItem value="producer">Producer</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign Up</Button>
      </CardFooter>
    </Card>
        </div>
    )
  );
}
