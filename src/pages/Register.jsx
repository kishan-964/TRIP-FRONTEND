import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
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
     <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-1/4 mx-auto my-auto mt-24">
            <CardHeader>
                <CardTitle className='text-2xl font-bold text-center text-blue-500'>
                    Register to ChaltiTrip
                </CardTitle>
                <CardDescription className="text-1xl text-center text-blue-950">
                    Enter your to get started with ChaltiTrip
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (

                    <Field data-invalid={fieldState.invalid}>
                     <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                      <Input type="name" placeholder=" your Name" {...field} id={field.name} aria-invalid={fieldState.invalid} />
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
                     <Input type="Email"{...field} id={field.name} aria-invalid={fieldState.invalid} />
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
                     <Input type="password"{...field} id={field.name} aria-invalid={fieldState.invalid} />
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
                     <Input type="password"{...field} id={field.name} aria-invalid={fieldState.invalid} />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                   </Field>
                    )}
                />
                
            </CardContent>
            <CardFooter className="block">

                <Button className="w-full" type="submit">
                    submit
                </Button>
                <div className='text-center text-muted-foreground'>
                    Already have an account? <a href="/login" className='text-blue-500'>Login</a>
                </div>
            </CardFooter>
           
        </Card>
     </form>
  )
}

export default Register