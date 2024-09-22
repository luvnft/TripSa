import React from 'react';
import { FaTikTok} from 'react-icons/fa'; // Import icons for social links

function Footer() {
    return (
        <footer className="w-full py-6 mt-10 text-white bg-gray-900">
            <div className="max-w-screen-xl px-4 mx-auto text-center">
                <h2 className="mb-2 text-xl font-bold">
                    Created By Arvrtise
                </h2>
                <p className="mb-4 text-gray-400">© 2024 All Rights Reserved</p>

                {/* Social Links */}
                <div className="flex justify-center gap-6 mb-4">
                    <a href="https://tiktok.com/travelw3w" target="_blank" rel="noopener noreferrer" className="text-white transition hover:text-gray-400">
                        <FaTikTok size={24} />
                    </a>
                    {/* You can add other social links here */}
                </div>

                {/* Tagline */}
                <p className="text-sm text-gray-500">
                    "Turning Ideas Into Reality"
                </p>
            </div>
        </footer>
    );
}

export default Footer;

