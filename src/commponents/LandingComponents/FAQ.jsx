import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="px-20 py-20 w-1/2 mx-auto">
      <div>
        <h2 className="text-5xl font-bold text-center mb-10">
          <span className="text-blue-500 text-6xl">F</span>requently Asked
          Questions
        </h2>
      </div>
      <div>
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>How to invite collaborators?</AccordionTrigger>
            <AccordionContent>
                To invite collaborators, simply click on the "Invite" button in the project dashboard 
                and enter their email addresses. They will receive an invitation to join 
                the project and collaborate with you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How to Manage trips?</AccordionTrigger>
            <AccordionContent>
                To manage your trips, go to the "My Trips" section in your account dashboard. Here, you can view all your upcoming and past trips, edit trip details, and cancel trips if needed.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
