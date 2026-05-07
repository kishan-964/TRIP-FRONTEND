import { Button } from "@/components/ui/button";
import { Edit, Eye, EyeIcon, Pencil, Plus, Trash } from "lucide-react";
import React, { useState } from "react";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useApi from "@/hooks/useApi";
import api from "@/api/axios";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Trip = () => {
  const navigate = useNavigate();

  const [dependency, setDependency] = useState(0);

  function formatDate(isoString) {
    const date = new Date(isoString);
    return date.toDateString();
  }

  const { data, error, loading } = useApi("/trips", {}, [dependency]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleDelete = async (tripId) => {
    try {
      const response = await api.delete(`/trips/${tripId}`);
      console.log(response);
      if (response.status === 200) {
        toast.success("Trip deleted successfully!");
        setDependency((prev) => prev + 1);
      } else {
        toast.error("Failed to delete trip. Please try again.");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.message ||
          "An error occurred while deleting the trip. Please try again.",
      );
    }
  };

  return (
    <main className={"container mx-auto my-12"}>
      <div>
        <Card>
          <CardHeader className={"border-b-2"}>
            <CardTitle
              className={"text-3xl text-center font-bold text-blue-600 "}
            >
              Trips Page
            </CardTitle>
            <CardDescription className={"text-red-600 flex justify-center"}>
              View and manage your Trips
            </CardDescription>
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
                {data && data.length === 0 ? (
                  <div className="text-center py-5 text-red-600">
                    No trips found. Please add some trips.
                  </div>
                ) : (
                  data.map((trip, index) => {
                    return (
                      <TableRow key={trip._id}>
                        <TableCell>{index + 1}</TableCell>

                        <TableCell>{trip.title}</TableCell>

                        <TableCell>₹{trip.price}</TableCell>

                        <TableCell>{formatDate(trip.startDate)}</TableCell>

                        <TableCell>
                          {trip.duration.days} days {trip.duration.nights}{" "}
                          nights
                        </TableCell>

                        <TableCell>
                          {" "}
                          {trip.availableSeats} available (Max:
                          {trip.maxParticipants})
                        </TableCell>

                        <TableCell className={"space-x-2"}>

                          <Dialog>
                            <DialogTrigger>
                             <Button variant="outline" size="icon" className={"hover:bg-green-600 text-green-600"}>
                              <Eye />
                             </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>
                                  {trip.title}
                                </DialogTitle>
                                <DialogDescription>
                                  {trip.description}
                                </DialogDescription>
                              </DialogHeader>

                            </DialogContent>
                          </Dialog>

                          <Button
                            onClick={() => navigate(`/trips/edit/${trip._id}`)}
                            size="icon"
                            variant="outline"
                            className={"hover:bg-blue-600 text-blue-600"}
                          >
                            {" "}
                            <Edit />{" "}
                          </Button>
                          <Button
                            onClick={() => handleDelete(trip._id)}
                            size="icon"
                            variant="outline"
                            className={"hover:bg-red-600 text-red-600"}
                          >
                            {" "}
                            <Trash />{" "}
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-gray-600">Copy Right@KISHAN KR. THAKUR</p>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default Trip;
