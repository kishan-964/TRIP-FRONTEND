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
import React from "react";

const ViewTrips = () => {
  const { data, error, loading } = useApi("/trips");

  if (loading) {
    return <div>LOading...</div>;
  }

  return (
    <main className="px-20 py-8">
      <h1 className="text-3xl font-bold text-blue-600">
        Available Trips Package
      </h1>

      <section className="mt-8 grid grid-cols-3 gap-6">
        {data && data.length == 0 ? (
          <div>No trips available at the moment.</div>
        ) : (
          data.map((trip, index) => {
            return (
              <Card>
                <CardHeader className="border-b">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1620914854125-67a1981aae6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Trip Image" className="rounded-md"
                    />
                  </div>
                  <CardTitle>{trip.title}</CardTitle>
                  <CardDescription>{trip.description}</CardDescription>
                  <CardAction></CardAction>
                </CardHeader>
                <CardContent>
                  <p>Price: ${trip.price}</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            );
          })
        )}
      </section>
    </main>
  );
};

export default ViewTrips;
