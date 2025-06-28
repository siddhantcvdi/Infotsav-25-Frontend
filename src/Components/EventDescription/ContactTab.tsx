import React from "react";

type ContactTabProps = {
  contacts: { name: string; phone: string }[];
};

const ContactTab: React.FC<ContactTabProps> = ({ contacts }) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row justify-center items-center sm:space-x-10 text-center text-white">
      {contacts.map((contact, index) => (
        <div key={index} className="flex flex-col">
          <p className="text-md leading-relaxed tracking-wider sm:text-md md:text-2xl">
            {contact.name}
          </p>
          <p className="text-sm md:text-xl">{contact.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactTab;
