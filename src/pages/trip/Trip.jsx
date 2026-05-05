import { Button } from "@/components/ui/button";
import { Edit, Pencil, Plus, Trash } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import useApi from "@/hooks/useApi";

const Trip = () => {
  const navigate = useNavigate();

      function formatDate(isoString) {
        const date = new Date(isoString);
        return date.toDateString();
      }

         const { data, error, loading} = useApi('/trips');

            if(loading){
                return <div>Loading...</div>
            }

  return (
    <main className={"container mx-auto my-12"}>
      <div>
        <Card>
          <CardHeader className={"border-b-2"}>
            <CardTitle className={"text-3xl text-center font-bold text-blue-600 "}>Trips Page</CardTitle>
            <CardDescription className={"text-black flex justify-center"}>View and manage your Trips</CardDescription>
            <CardAction>
              <Button
                onClick={() => {
                  navigate("/trips/add");
                }}
              >
                <Plus /> Add Trips
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-red-600">S.N</TableHead>
                         <TableHead>Title</TableHead>
                         <TableHead>Price</TableHead>
                         <TableHead>StartDate</TableHead>
                         <TableHead>Duration</TableHead>
                         <TableHead>Seats</TableHead>
                         <TableHead></TableHead>
                        
                            
                        
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        data.map((trip, index)=>{
                            return (
                                <TableRow key={trip._id}>
                                    <TableCell>{index + 1}</TableCell>
                                        
                                    
                                     <TableCell>{trip.title}</TableCell>
                                        
                                    
                                     <TableCell>{trip.price}</TableCell>

                                       
                                     <TableCell>{formatDate(trip.startDate)}</TableCell>

                                        
                                     <TableCell>{trip.duration.days} days {trip.duration.nights} nights</TableCell>
                                        
                                    
                                     <TableCell>  {trip.availableSeats} available (Max:{trip.maxParticipants})</TableCell>
                                     
                                     <TableCell className={"space-x-2"}>
                                        <Button size='icon' variant="outline" className={"text-blue-600"}> <Edit/> </Button>
                                        <Button size='icon' variant="outline" className={"text-red-600"}> <Trash/> </Button>
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
      </div>
    </main>
  );
};

export default Trip;
