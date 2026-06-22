import React from 'react'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import z from 'zod'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import api from '@/api/axios'
import { toast } from 'sonner'

const AddBlog = () => {
  return (
    <Card className="w-2/5 mx-auto my-12">
        <CardHeader>
            <CardTitle>
                Add New Blog
            </CardTitle>
            <CardDescription>
                Create a new blog and share it with your friends!
            </CardDescription>
        </CardHeader>
        <CardContent>
            <TripForm />
        </CardContent>
    </Card>
  )
}

export default AddBlog