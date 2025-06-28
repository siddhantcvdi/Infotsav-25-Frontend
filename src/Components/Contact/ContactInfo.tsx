import contacts from "../../constants/contacts.json";

type ContactInfoProps = {};

const ContactInfo = ({ }: ContactInfoProps) => {
  return (
    <section className="flex flex-col gap-4 font-semibold">
      <div>
        <h3 className="text-[#6C91FF] font-bold text-3xl mb-1">
          Address:
        </h3>
        <p className="mt-5">
          Atal Bihari Vajpayee Institute of Information Technology and
          Management Gwalior,Morena Link Road, Gwalior, Madhya Pradesh, India, 474015
        </p>
      </div>
      <div>
        <h3 className="text-[#6C91FF] font-bold text-3xl mb-1">Contacts:</h3>
        {contacts.map((contact, index) => {
          return (
            <div key={index} className="mt-4">
              <h4 className="text-[#6C91FF] font-semibold text-xl">
                {contact.name}
              </h4>
              <p>{contact.number}</p>
              <p>{contact.email}</p>
            </div>
          );
        })}
      </div>
    </section >
  );
};

export default ContactInfo;
