import React from 'react'
import FeaturesCard from '../common/FeaturesCard'
import {    CheckCircle, HelpCircle, PhoneCall, PlaneIcon } from 'lucide-react'
const Features = () => {
  let featuresData = [
    {
      title: "24/7 Support",
      description: "The support team is available 24/7 to assist you with any questions or concerns.",
      icon: PhoneCall
     
    },
    {
      title: "Personalized Itineraries",
      description: "We create personalized itineraries based on your preferences and interests.",
      icon: HelpCircle
    },
    {
      title: "Best Price Guarantee",
      description: "We offer the best price guarantee on all our travel packages.",
      icon: CheckCircle
    },
    {
      title: "Expert Travel Guides",
      description: "Our expert travel guides provide you with insider tips and local knowledge.",
      icon: PlaneIcon
    }
     
  ]
    return (
      
      
  <section className='px-20 py-16'>
       {/*heading*/}

       <div>
         <h2 className='text-5xl font-bold text-center mb-10'><span className='text-blue-500 text-6xl'>O</span>ur Features</h2>
           
       </div>

         {/* content */}

         <div className='grid grid-cols-4 gap-4'>
          {featuresData.map((feature, index) => (
            <FeaturesCard key={index} feature={feature} />
          ))
          }
         </div>
        

  </section>
  )
}

export default Features