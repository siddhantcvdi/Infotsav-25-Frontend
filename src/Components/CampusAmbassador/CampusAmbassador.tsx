import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/Accordion";
import React from "react";
import HeroSection from "./HeroSection";
import WhyBecomeAmbassador from "./WhyBecomeAmbassador";

const CampusAmbassador: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto mt-[50px] px-5">
      <HeroSection />

      {/* Section 2: Why Join */}
      <WhyBecomeAmbassador />

      {/* Section 4: FAQs */}
      <section className="mb-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Got <span className="text-red-400">Questions?</span>
          </h2>
          <p className="text-xl text-gray-300">
            We've got answers! Check out these frequently asked questions.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-6xl mx-auto text-white text-xl md:text-2xl px-4 md:px-8"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>When will I receive my rewards?</AccordionTrigger>
            <AccordionContent>
              Rewards are distributed after the registration deadline and
              verification.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Can I join if I’m not from a technical background?
            </AccordionTrigger>
            <AccordionContent>
              Yes, the program is open to all students, regardless of their
              field of study.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Is there any registration fee for participation?
            </AccordionTrigger>
            <AccordionContent>
              Registration for Round 1 is free, while Round 2 requires a small
              registration fee, which can be reimbursed by your respective
              institute.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

export default CampusAmbassador;
