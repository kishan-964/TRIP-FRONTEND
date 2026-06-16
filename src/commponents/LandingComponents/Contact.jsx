"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"
import api from "@/api/axios"
import { toast } from "sonner"

export function ContactCard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await api.post("/contacts", formData);
      console.log(response);
      if(response.status === 201){
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }else{
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message || "An error occurred while sending the message. Please try again.");
    }
    
  }

  return (
    <div className="flex justify-center px-4 py-10">
      <Card className="w-full max-w-md border border-border/50 mx-auto bg-[#d5bbff5d]">
        <CardHeader className="space-y-2 pb-6">
          <CardTitle className="text-3xl font-bold tracking-tight text-foreground text-center">
            <span className="text-blue-600 text-4xl">C</span>ontact Us
          </CardTitle>
        <CardDescription className="text-muted-foreground">
          Have a question or feedback? Fill out the form below and we&apos;ll get back to you shortly.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input className="border-black"
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input className="border-black"
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea className="border-black"
              id="message"
              placeholder="Write your message here..."
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              required
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            Send Me
            <Send className="ml-2 size-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  </div>
  )
}
