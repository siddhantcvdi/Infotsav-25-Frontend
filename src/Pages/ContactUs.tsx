import ContactHeader from '../Components/Contact/ContactHeader';
import ContactForm from '../Components/Contact/ContactForm';
import QuickContactInfo from '../Components/Contact/QuickContactInfo';
import SocialMediaLinks from '../Components/Contact/SocialMediaLinks';
import MapSection from '../Components/Contact/MapSection';
import ContactsSection from '../Components/Contact/ContactsSection';

function ContactUs() {
    return (
        <main className="min-h-screen w-full text-white px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-7xl mx-auto">
                <ContactHeader />

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <ContactForm />

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <QuickContactInfo />
                        <SocialMediaLinks />
                    </div>
                </div>

                <ContactsSection />
                <MapSection />
            </div>
        </main>
    );
}

export default ContactUs;

