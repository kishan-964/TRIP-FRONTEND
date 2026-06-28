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
import { Link, Navigate, useNavigate } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'
import { toast } from 'sonner'
import api from '@/api/axios'
import { jwtDecode } from 'jwt-decode'





const formSchema = z.object({
  email: z.string().email().min(5, "Email must be at least 5 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

const Login = () => {

    const navigate = useNavigate();
    const { token, login } = useAuth();

    if(token){
        const decodedToken = token ? jwtDecode(token) : null;

        return (
            <Navigate to={decodedToken.role === "admin" ? "/dashboard" : "/client/dashboard"} />
        )
    }

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })


   const onSubmit = async (data) => {
        console.log(data)
          try{
            const response = await api.post("/auth/login", data);
            console.log(response);  

            if(response.status === 200){
                toast.success("Login Successful!")
                login(data, response.data.accessToken)

                 const decodedToken =  response.data.accessToken ? jwtDecode(response.data.accessToken) : null;

                 if(decodedToken.role === "admin"){
                    navigate("/dashboard");
                 }else{
                    navigate("/client/dashboard");
                 }
            }else{
                toast.error("Login failed. Please try again.")
            }
        }catch (error){
            console.error("Login failed:", error);
            toast.error("Login failed. Please try again.")
        }
    }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020817] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.2),transparent_35%)]" />
      <div className="absolute inset-0 bg-linear-to-b from-[#060b15]/90 via-[#020817]/90 to-[#020817]" />
      <div className="relative flex min-h-screen items-center justify-center px-4 py-16">
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-lg">
          <Card className="mx-auto overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 shadow-2xl shadow-primary/20 backdrop-blur-xl">
            <CardHeader className="bg-slate-950/80 px-8 py-10 text-center">
              <CardTitle className="text-3xl font-bold text-foreground">Login</CardTitle>
              <CardDescription className="mt-3 text-base text-muted-foreground">
                Enter your details to continue.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 px-8 py-8">
              
              
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input className="border-white/10 bg-slate-950/70 text-foreground"
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
                    <Input className="border-white/10 bg-slate-950/70 text-foreground"
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

            <CardFooter className="flex flex-col gap-4 bg-white px-8 pb-10 pt-4 text-slate-800">
              <Button className="w-full bg-linear-to-r from-primary to-accent text-primary-foreground hover:shadow-xl hover:shadow-primary/30" type="submit">
                Login
              </Button>
              <div className="text-sm text-center text-slate-600">
                Don't have an account? <Link to="/register" className="text-primary hover:text-primary/80">Register</Link>
              </div>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  )
}

export default Login