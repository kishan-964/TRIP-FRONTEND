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
            <AccordionTrigger className="text-lg font-semibold">
              How to invite collaborators?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
                To invite collaborators, simply click on the <span className="font-bold text-red-500">"Invite"</span> button in the project dashboard 
                and enter their email addresses. They will receive an invitation to join 
                the project and collaborate with you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold">
              How to Manage trips?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
                To manage your trips, go to the <span className="font-bold text-red-500">"My Trips"</span> section in your account dashboard. Here, you can view all your upcoming and past trips, edit trip details, and cancel trips if needed.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-semibold">
              How to contact support?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
                If you need assistance, you can contact our support team by clicking on the <span className="font-bold text-red-500">"Support"</span> link in the footer of our website. You can also email us directly at <span className="font-bold text-red-500">support@company.com</span>. We are here to help you with any questions or issues you may have.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-semibold ">
              How to Know aboout real-time updates?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
                To stay informed about real-time updates, make sure to enable notifications in your account settings. You can choose to receive updates via <span className="font-bold text-red-500">email</span> or through our <span className="font-bold text-red-500">mobile app</span>. This way, you'll be notified about any changes to your trips, new features, or important announcements.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
