import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useApi from "@/hooks/useApi";
import { Plane } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import api from "@/api/axios";
import { toast } from "sonner";

const ViewTrips = () => {
  const { data, error, loading } = useApi("/trips");

  if (loading) {
    return <div>Loading...</div>;
  }

   const onSubmit = async (tripId) => {
    

    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const numberOfPeople = document.getElementById("numberofPeople").value;

    const data ={
      customerEmail: email,
      customerPhone: phone,
      numberOfPeople: numberOfPeople,
      tripId: tripId
    }

    try{
      const response = await api.post("/booking", data);

      if(response.status === 201){
        toast.success("Trip booked successfully!");
      
      }else{
        toast.error("Some error Occured.")
      }
      
    }catch(error){
      toast.error(error.message || "Some error Occured.")
    }
    }
   

  return (
    <main className="px-20 py-8">
      <h1 className="text-3xl font-bold text-blue-600 text-center">
        Available Trips Package
      </h1>

      <section className="mt-8 grid grid-cols-3 gap-6">
        {data && data.length == 0 ? (
          <div>No trips available at the moment.</div>
        ) : (
          data.map((trip, index) => {
            return (
              <div key={trip.id}>

              
              <Card>
                <CardHeader className="border-b">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1620914854125-67a1981aae6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Trip Image"
                      className="rounded-md"
                    />
                  </div>
                  <CardTitle className="text-center">{trip.title}</CardTitle>
                  <CardDescription className="text-center">
                    {trip.description}
                  </CardDescription>
                  <CardAction></CardAction>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 grid grid-cols-2 gap-4">
                    <p className="font-semibold">Price: ₹{trip.price}</p>
                    <p>
                      <strong>Start Date:</strong>{" "}
                      {new Date(trip.startDate).toDateString()}
                    </p>
                    <p>
                      <strong>Duration:</strong> {trip.duration.days} days{" "}
                      {trip.duration.nights} nights
                    </p>
                    <p>
                      <strong>End Date:</strong>{" "}
                      {new Date(trip.endDate).toDateString()}
                    </p>
                    <p>
                      <strong>Available Seats:</strong> {trip.availableSeats} /{" "}
                      {trip.maxParticipants}
                    </p>
                    <p>
                      <strong>Per Person:</strong> ₹{trip.pricePerPerson}
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">
                        Book Trip
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader className="border-b pb-2">
                        <DialogTitle>Enter Contact Information</DialogTitle>
                        <DialogDescription>
                          Please provide your contact details to book this trip.
                        </DialogDescription>
                      </DialogHeader>
                        <form>
                          <div className="space-y-2 mb-4">
                            <Label htmlfor="email">Email</Label>
                            <Input id="email" type="email" placeholder="abc@gmail.com" />
                          </div>
                          <div className="space-y-2 mb-4">
                            <Label htmlfor="phone">Phone</Label>
                            <Input id="phone"  placeholder="+977-XXXXXXXXXX" />
                          </div>
                          <div className="space-y-2 mb-4">
                            <Label htmlfor="numberofPeople">Number of People</Label>
                            <Input id="numberofPeople" type="number" placeholder="2" />
                          </div>
                           <Button type="button" onClick={()=>{onSubmit(trip._id)}} className={"w-full"} size="lg">Confirm</Button>
                        </form>

                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
              </div>
            );
          })
        )}
      </section>
    </main>
  );
}

export default ViewTrips;
