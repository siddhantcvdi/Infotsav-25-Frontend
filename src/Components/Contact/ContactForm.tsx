import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            alert('Thank you for your message! We\'ll get back to you soon.');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-pixelify font-bold mb-6 text-center">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        {/* <label className="block text-sm font-medium mb-2">Name</label> */}
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl focus:border-red-500 focus:outline-none transition-all duration-300 hover:shadow-[inset_0_0_20px_rgba(239,68,68,0.3)] focus:shadow-[inset_0_0_30px_rgba(239,68,68,0.5)]"
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        {/* <label className="block text-sm font-medium mb-2">Email</label> */}
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl focus:border-red-500 focus:outline-none transition-all duration-300 hover:shadow-[inset_0_0_20px_rgba(239,68,68,0.3)] focus:shadow-[inset_0_0_30px_rgba(239,68,68,0.5)]"
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div>
                    {/* <label className="block text-sm font-medium mb-2">Subject</label> */}
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl focus:border-red-500 focus:outline-none transition-all duration-300 hover:shadow-[inset_0_0_20px_rgba(239,68,68,0.3)] focus:shadow-[inset_0_0_30px_rgba(239,68,68,0.5)]"
                        placeholder="What's this about?"
                    />
                </div>
                <div>
                    {/* <label className="block text-sm font-medium mb-2">Message</label> */}
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl focus:border-red-500 focus:outline-none transition-all duration-300 resize-none hover:shadow-[inset_0_0_20px_rgba(239,68,68,0.3)] focus:shadow-[inset_0_0_30px_rgba(239,68,68,0.5)] h-48"
                        placeholder="Tell us more about your inquiry..."
                    />
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-pixelify text-lg py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] hover:scale-[1.02]"
                >
                    {isSubmitting ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    ) : (
                        <>
                            <Send className="w-5 h-5" />
                            Send Message
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
