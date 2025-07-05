import { Instagram, Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';

const SocialMediaLinks = () => {
    const socialLinks = [
        { icon: <Instagram className="w-6 h-6" />, url: "#", name: "Instagram" },
        { icon: <Facebook className="w-6 h-6" />, url: "#", name: "Facebook" },
        { icon: <Twitter className="w-6 h-6" />, url: "#", name: "Twitter" },
        { icon: <Linkedin className="w-6 h-6" />, url: "#", name: "LinkedIn" },
        { icon: <Youtube className="w-6 h-6" />, url: "#", name: "YouTube" }
    ];

    return (
        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-pixelify font-bold mb-6">Follow Us</h3>
            <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        className="group bg-white/10 hover:bg-red-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]"
                        aria-label={social.name}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
            <p className="text-gray-300 mt-4">
                Stay updated with the latest announcements, events, and behind-the-scenes content from Infotsav 2025.
            </p>
        </div>
    );
};

export default SocialMediaLinks;
