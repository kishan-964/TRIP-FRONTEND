import React, { useState } from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import useApi from '@/hooks/useApi'
import { Button } from '@/components/ui/button'
import api from '@/api/axios'
import { toast } from 'sonner'
import { set } from 'zod'
import { Trash2 } from 'lucide-react'


const ContactList = () => {

    const [dependency, setDependency] = useState(0)

    const { data, error, loading } = useApi("/contacts",{},[dependency]);

    const badgeColor = (status) =>{
        switch(status){
            case "pending":
                return "bg-orange-500";

            case "resolved":
                return "bg-green-400";

            
        }
    }

    if(loading){
        return <div>Loading...</div>
    }
     
     const handleStatusChange = async(contactId, newStatus) => {
        try{
            const response = await api.put(`/contacts/${contactId}`, {status: newStatus});
            console.log(response);  

            if(response.status === 200){
                toast.success("Contact Status updated successfully!")
                setDependency(prev => prev + 1);
                
            }else{
                toast.error("Failed to update Contact status. Please try again.")
            }
        }catch (error){
            console.error("Failed to update Contact status:", error);
            toast.error("Failed to update Contact status. Please try again.")
        }

     }

     const handleDelete = async(contactId) => {
        try{
            const response = await api.delete(`/contacts/${contactId}`);
            
            if(response.status === 200){
                toast.success("Contact deleted successfully!")
                setDependency(prev => prev + 1);
            }else{
                toast.error("Failed to delete contact. Please try again.")
            }
        }catch (error){
            console.error("Failed to delete contact:", error);
            toast.error("Failed to delete contact. Please try again.")
        }
     }
     
    return (
        <main className="px-20 py-8">
            <Card>
                <CardHeader className="border-b">
                    <CardTitle className="text-2xl font-bold text-blue-600 text-center">Contact List</CardTitle>
                    <CardDescription className="text-center text-red-500" >
                        Show all your contacts.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableCaption>A list of your recent contacts.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>S.N.</TableHead>
                                <TableHead className="w-full">Name</TableHead>
                                
                                <TableHead>Email</TableHead>
                                <TableHead>Message</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                data && data.length == 0 
                                ?
                                <div>You do not have any contacts</div>
                                :
                                data.map((contact, index)=>{
                                    return (
                                    <TableRow key={contact._id}>
                                        <TableCell>{index+1}</TableCell>
                                        <TableCell>{contact.name}</TableCell>
                                        <TableCell>{contact.email}</TableCell>
                                        <TableCell>{contact.message}</TableCell>
                                        <TableCell>
                                            <span className={` ${badgeColor(contact.status)} text-black px-4 py-1 rounded-full uppercase`}>{contact.status}</span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                          {
                                             contact.status === "pending" ?
                                              <Button variant="outline" size="sm" onClick={()=>{handleStatusChange(contact._id, "resolved")}}>
                                                Mark as Resolved
                                             
                                               </Button>
                                               :
                                               <Button variant="outline" size="sm" onClick={()=>{handleStatusChange(contact._id, "pending")}}>
                                                Mark as Pending
                                             
                                               </Button>
                                                

                                           }
                                           <Button variant="ghost" size="sm" onClick={()=>{handleDelete(contact._id)}} className="ml-2 text-red-600 hover:text-red-700 hover:bg-red-50">
                                               <Trash2 size={18} />
                                           </Button>
                                        
                                        </TableCell>
                                    </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </main>
    )
}

export default ContactList