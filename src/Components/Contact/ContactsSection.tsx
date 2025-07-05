import { Mail, Phone } from 'lucide-react';
import contactsData from '../../constants/contacts.json';

interface ContactPerson {
    name: string;
    email: string;
    number: string;
}

const ContactsSection = () => {
    return (
        <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-pixelify font-bold text-center mb-12">
                Contacts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {contactsData.map((member: ContactPerson, index: number) => (
                    <div
                        key={index}
                        className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group hover:scale-[1.02]"
                    >
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                                {member.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <h3 className="text-xl font-pixelify font-bold mb-2 group-hover:text-red-400 transition-colors">
                                {member.name}
                            </h3>
                            <div className="space-y-2 text-sm text-gray-300">
                                <div className="flex items-center justify-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    <span className="break-all">{member.email}</span>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    <span>{member.number}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactsSection;
