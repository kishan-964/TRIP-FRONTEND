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
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/Bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative flex min-h-screen items-center justify-center px-4 py-16">
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md">
          <Card className="mx-auto bg-sky-100">
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
                    <Input className="border-black"
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

              
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                    <Input className="border-black"
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
      </div>
    </div>
  )
}

export default Login