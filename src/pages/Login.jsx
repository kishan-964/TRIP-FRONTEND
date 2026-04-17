import React from 'react'
import { useForm, Controller } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'
import { toast } from 'sonner'





const formSchema = z.object({
  email: z.string().email().min(5, "Email must be at least 5 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

const Login = () => {

  const navigate = useNavigate();
  const {  login } = useAuth();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const onSubmit = async (data) => {
    console.log(data)
    try{
            const response = await api.post("/auth/login", data);
            console.log(response);  

            if(response.status === 201){
                toast.success("Login Successful!")
                login(data, response.data.accessToken)
                navigate("/dashboard");
            }else{
                toast.error("Login failed. Please try again.")
            }
        }catch (error){
            console.error("Login failed:", error);
            toast.error("Login failed. Please try again.")
        }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Card className="w-1/4 mx-auto my-auto mt-24">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-blue-500">Login</CardTitle>
          <CardDescription className="text-center text-blue-950">
            Enter your Details
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          
          
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                <Input
                  type="email"
                  placeholder="Your Email"
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.error && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Password */}
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                <Input
                  type="password"
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.error && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

        </CardContent>

        <CardFooter className="block">
          <Button className="w-full" type="submit">
            Login
          </Button>
          <div className="text-sm text-center text-blue-950">
            Don't have an account? <a href="/register" className="text-blue-500">Register</a>
          </div>
        </CardFooter>
      </Card>
    </form>
  )
}

export default Login