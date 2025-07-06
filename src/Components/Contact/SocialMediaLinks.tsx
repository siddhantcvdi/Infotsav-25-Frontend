import { Instagram, Twitter, Facebook, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const SocialMediaLinks = () => {
    const socialLinks = [
        { icon: <Instagram className="w-6 h-6" />, url: "#", name: "Instagram" },
        { icon: <Facebook className="w-6 h-6" />, url: "#", name: "Facebook" },
        { icon: <Twitter className="w-6 h-6" />, url: "#", name: "Twitter" },
        { icon: <Linkedin className="w-6 h-6" />, url: "#", name: "LinkedIn" },
        { icon: <Youtube className="w-6 h-6" />, url: "#", name: "YouTube" }
    ];

    return (
        <div className="backdrop-blur-md bg-white/5 rounded-2xl border-white/10 border p-8 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500">
            {/* Contact Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Left Column - Email and Phone */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-red-500" />
                        <span className="text-white">infotsav@iiitm.ac.in</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-red-500" />
                        <span className="text-white">+91 751 2449090</span>
                    </div>
                </div>

                {/* Right Column - Address */}
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                        <div className="text-white">
                            <div className="font-medium">IIIT Gwalior</div>
                            <div className="text-sm text-gray-300">ABV-IIITM, Morena Link Road</div>
                            <div className="text-sm text-gray-300">Gwalior, Madhya Pradesh 474015</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-4 justify-center">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        className="group relative bg-gradient-to-br from-white/15 to-white/5 hover:from-red-600 hover:to-red-700 p-4 rounded-2xl transition-all duration-300 border border-white/10 hover:border-red-500/50 overflow-hidden"
                        aria-label={social.name}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10 text-white group-hover:text-white transition-colors duration-300">
                            {social.icon}
                        </div>
                    </a>
                ))}
            </div>

            
        </div>
    );
};

export default SocialMediaLinks;
