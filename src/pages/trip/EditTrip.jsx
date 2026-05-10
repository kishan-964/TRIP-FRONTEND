
import TripForm from '@/commponents/common/TripForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import useApi from '@/hooks/useApi'
import { Plane } from 'lucide-react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { endsWith } from 'zod'

const EditTrip = () => {

    const tripId = useParams().id;
    console.log(tripId)

    const { data, error, loading } = useApi(`/trips/${tripId}`);

    if(error){
        console.error(error);
    }

    if(loading){
        return <div>Loading...</div>
    }

    const newData = {
         ...data,
         startDate: data.startDate.split("T")[0],
         endDate: data.endDate.split("T")[0]
    }

  return (
     <Card className="w-2/5 mx-auto my-12">
        <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 font-bold">
                <Plane className="h-5 w-5 text-blue-600" />
                Edit Trip
            </CardTitle>
            <CardDescription>
                Update your trip details below
            </CardDescription>
        </CardHeader>
        <CardContent>
            <TripForm tripData={newData} />
        </CardContent>
    </Card>
  )
}

export default EditTrip