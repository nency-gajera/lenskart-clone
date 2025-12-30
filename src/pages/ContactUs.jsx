import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useState } from "react";

export default function ContactUs() {
    const [openIndex, setOpenIndex] = useState(null);

    const data = [
        {
            title: "I want to provide/change 'my power' for this order",
            desc: "We offer multiple options to provide your prescription to us - Upload a picture, enter it online, email us (power@lenskert.com). In case, you have made a mistake while adding power and wish to change it, you can get in touch with us.",
            Wait: "Wait time under 2 min(s)",
        },
        {
            title: "I want to Cancel/Return my order",
            desc: "You can cancel or return the order from your Lenskert account or contact support.",
            Wait: "Immediate response",
        },
        {
            title: "Where is my order?",
            desc: "Track the current status of your order from the order tracking page.",
            Wait: "Fast response",
        },
        {
            title: "I want to modify items in this order",
            desc: "Changes can be made before the order is shipped.",
            Wait: "Wait time under 1 min",
        },
        {
            title: "I have exchage and refund related queries",
            desc: "Refund and exchange policies are quick and easy to follow.",
            Wait: "Wait time 3 min(s)",
        },
        {
            title: "I have Lkcash related queries for this order",
            desc: "Check your Lkcash balance in the wallet section.",
            Wait: "Instant",
        },
        {
            title: "I have other issues",
            desc: "Contact support for the concerns.",
            Wait: "Wait time under 2 min(s)",
        },
    ];

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-[900px] mx-auto mt-10 px-4">
            <h1 className="text-center text-3xl font-semibold mb-8">Queries</h1>

            <div>
                {data.map((item, index) => (
                    <div key={index} className="border-b border-gray-300">
                        <div
                            className="flex justify-between items-center py-4 px-2 cursor-pointer text-[17px] text-gray-700"
                            onClick={() => toggle(index)}
                        >
                            <span>{item.title}</span>

                            <span className="text-gray-600 transition-transform">
                                {openIndex === index ? (
                                    <ChevronDown className="w-6 h-6 rotate-180 transition-transform" />
                                ) : (
                                    <ChevronRight className="w-6 h-6 transition-transform" />
                                )}
                            </span>

                        </div>

                        {openIndex === index && (
                            <div className="px-4 py-4 animate-fadeIn">
                                <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
                                    {item.desc}
                                </p>

                                <button className="w-40 py-2 border border-teal-600 text-teal-600 font-semibold rounded-md hover:bg-teal-50 transition">
                                    CALL US
                                </button>

                                <p className="text-center text-[13px] text-gray-500 mt-3">
                                    {item.Wait}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Tailwind animation */}
            <style>
                {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease;
          }
        `}
            </style>
        </div>
    );
}
