import React from 'react';
import { Facebook, Phone, Send } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Binh An. All rights reserved.</p>
    
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 flex items-center gap-2"
            >
              <Facebook className="w-5 h-5" /> Facebook
            </a>

            <a
              href="https://zalo.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" /> Zalo
            </a>

            <a
              href="https://t.me/yourtelegram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 flex items-center gap-2"
            >
              <Send className="w-5 h-5" /> Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
