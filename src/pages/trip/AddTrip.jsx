import TripForm from '@/commponents/common/TripForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Plane } from 'lucide-react'
import React from 'react'

const AddTrip = () => {

  return (
    
    <Card className="w-2/5 mx-auto my-12"> 
    
        <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 font-bold">
                <Plane className="h-5 w-5 text-blue-600" />
                Add New Trip
            </CardTitle>

            <CardDescription>
                Create a new trip and share to your friends!
            </CardDescription>

        </CardHeader>

        <CardContent>
            <TripForm />
        </CardContent>
    </Card>
  )
}

export default AddTrip