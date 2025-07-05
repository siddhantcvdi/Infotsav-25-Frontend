import { Mail, Phone, MapPin } from 'lucide-react';

const QuickContactInfo = () => {
    return (
        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-pixelify font-bold mb-6">Quick Contact</h3>
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="bg-red-600 p-3 rounded-xl hover:shadow-[0_0_25px_rgba(239,68,68,0.6)] transition-all duration-300 hover:scale-110">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-300">infotsav@iiitm.ac.in</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-red-600 p-3 rounded-xl hover:shadow-[0_0_25px_rgba(239,68,68,0.6)] transition-all duration-300 hover:scale-110">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-300">+91 751 2449090</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-red-600 p-3 rounded-xl hover:shadow-[0_0_25px_rgba(239,68,68,0.6)] transition-all duration-300 hover:scale-110">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-300">
                            ABV-IIITM Gwalior<br />
                            Morena Link Road, Gwalior<br />
                            Madhya Pradesh 474015
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickContactInfo;
