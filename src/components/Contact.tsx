import React, { useState } from 'react';
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const formData = new FormData(event.currentTarget);
            formData.append("access_key", "32b39fc3-5396-4ede-9211-ed7a4338ac6e");

            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                (event.target as HTMLFormElement).reset();
                // Auto-reset the success message after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setErrorMessage(result.message || 'Something went wrong. Please try again.');
                console.error('Web3Forms error:', result);
            }
        } catch (err) {
            setStatus('error');
            setErrorMessage('Network error. Please check your internet connection and try again.');
            console.error('Form submission error:', err);
        }
    }

    return (
        <div className="text-black flex flex-col lg:flex-row justify-around items-center bg-white min-h-screen px-6 sm:px-12 lg:px-32 py-16 " id='Contact'>
            {/* Left Section - Contact Info */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 text-center lg:text-left"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-5">
                    Let's Chat.
                    <br />
                    Tell me about your <br /> project. <br />
                    <span className="text-xl text-blue-700">Let's Build Something Together :</span>
                </h1>

                <div className="flex flex-col gap-6 mt-10 lg:mt-0 px-7">
                    <div className="flex items-center gap-4">
                        <IoMailOutline className="text-blue-700" size={35} />
                        <div>
                            <h3 className="text-lg text-left font-semibold">Email</h3>
                            <p className="text-gray-600 text-left">k.mahalakshmi2904@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <IoLocationOutline className="text-blue-700" size={35} />
                        <div>
                            <h3 className="text-lg text-left font-semibold">Location</h3>
                            <p className="text-gray-600 text-left">Hyderabad, Telangana, India</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Right Section - Contact Form */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white w-full md:w-2/3 lg:w-1/2 p-8"
            >
                <h2 className="text-2xl font-semibold mb-4 text-left">
                    Send me a message 🚀
                </h2>

                {/* Success Message */}
                {status === 'success' && (
                    <div className="mb-4 p-4 bg-green-50 border border-green-300 text-green-700 rounded-lg">
                        ✅ Message sent successfully! I'll get back to you soon.
                    </div>
                )}

                {/* Error Message */}
                {status === 'error' && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-300 text-red-700 rounded-lg">
                        ❌ {errorMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    {/* Honeypot spam filter (hidden from users, catches bots) */}
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                    <div className="mb-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full name*"
                            className="w-full px-4 py-2 border-2 border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-200"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address*"
                            className="w-full px-4 py-2 border-2 border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-200"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="w-full px-4 py-2 border-2 border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-200"
                        />
                    </div>

                    <div className="mb-4">
                        <textarea
                            name="message"
                            placeholder="Tell us more about your project*"
                            className="w-full h-32 px-4 py-2 border-2 border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 resize-none transition duration-200"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-blue-700 text-white font-semibold py-2 rounded-lg hover:bg-blue-900 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === 'loading' ? 'Sending...' : 'Send message'}
                    </button>
                </form>
            </motion.div>
        </div>
    );
}