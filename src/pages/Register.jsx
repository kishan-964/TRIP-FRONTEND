import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { Link, Navigate, useNavigate } from "react-router-dom"
import * as z from "zod"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import api from '@/api/axios'
import { toast } from 'sonner'
import useAuth from '@/hooks/useAuth'

const formSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email().min(5, "Email must be at least 5 characters"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Confirm Password must be same as Password"),

}).refine((data)=>{ return data.password === data.confirmPassword},
{
    message: "Passwords don't match",
    path: ["confirmPassword"]
}
)

const Register = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }

    })
    
    const navigate = useNavigate();
    const { token } = useAuth();
      if(token){
        return (
            <Navigate to="/dashboard" />
        )
     }

    const onSubmit = async(data) => {
        console.log(data)
         const newData = {
            name: data.name,
            email: data.email,
            password: data.password
        }
        try{
            const response = await api.post("/auth/register", newData);
            console.log(response);  

            if(response.status === 201){
                toast.success("Registration Successful!")
                navigate("/login");
            }else{
                toast.error("Registration failed. Please try again.")
            }
        }catch (error){
            console.error("Registration failed:", error);
            toast.error("Registration failed. Please try again.")
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
              <CardTitle className='text-3xl font-bold text-foreground'>
                Register to ChaltiTrip
              </CardTitle>
              <CardDescription className="mt-3 text-base text-muted-foreground">
                Join ChaltiTrip and book your next adventure with ease.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 px-8 py-8">
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (

                    <Field data-invalid={fieldState.invalid}>
                     <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                      <Input className="border-black" type="name" placeholder=" your Name" {...field} id={field.name} aria-invalid={fieldState.invalid} />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />
                <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                   <Field data-invalid={fieldState.invalid}>
                     <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                     <Input className="border-white/10 bg-slate-950/70 text-foreground" type="email" {...field} id={field.name} aria-invalid={fieldState.invalid} />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                   </Field>
                    )}
                />
                <Controller
                    name="password"
                    control={form.control}
                    render={({ field, fieldState }) => (
                   <Field data-invalid={fieldState.invalid}>
                     <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                     <Input className="border-white/10 bg-slate-950/70 text-foreground" type="password" {...field} id={field.name} aria-invalid={fieldState.invalid} />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                   </Field>
                    )}
                />
                <Controller
                    name="confirmPassword"
                    control={form.control}
                    render={({ field, fieldState }) => (
                   <Field data-invalid={fieldState.invalid}>
                     <FieldLabel htmlFor={field.name}>Confirm Password</FieldLabel>
                     <Input className="border-white/10 bg-slate-950/70 text-foreground" type="password" {...field} id={field.name} aria-invalid={fieldState.invalid} />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                   </Field>
                    )}
                />
                
            </CardContent>
            <CardFooter className="flex flex-col gap-4 bg-white px-8 pb-10 pt-4">

                <Button className="w-full bg-linear-to-r from-primary to-accent text-primary-foreground hover:shadow-xl hover:shadow-primary/30" type="submit">
                    Create Account
                </Button>
                <div className='text-center text-slate-600'>
                    Already have an account? <Link to="/login" className='text-primary hover:text-primary/80'>Login</Link>
                </div>
            </CardFooter>
           
        </Card>
     </form>
      </div>
    </div>
  )
}

export default Register