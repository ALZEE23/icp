import React from "react";
import { ShieldCheck, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";


function Footer({ border = false }) {
  return (
    <footer className={`relative overflow-hidden ${border ? "border-t border-gray-200" : ""}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid gap-10 py-8 sm:grid-cols-12 md:py-12">
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 text-white md:text-lg text-sm font-semibold">
              <ShieldCheck size={32} className="text-blue-500" />
              SecureVault
            </Link>
            <div className="text-sm text-gray-600">
              &copy;  SecureVault - All rights reserved.
            </div>
          </div>

          {/* 2nd - 4th blocks */}
          {[
            { title: "Product", links: ["Features", "Integrations", "Pricing & Plans", "Changelog", "Our method"] },
            { title: "Company", links: ["About us", "Diversity & Inclusion", "Blog", "Careers", "Financial statements"] },
            { title: "Resources", links: ["Community", "Terms of service", "Report a vulnerability"] }
          ].map((section, index) => (
            <div key={index} className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
              <h3 className="text-sm font-medium">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link className="text-gray-600 transition hover:text-gray-900" to="#">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 5th block: Social */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Social</h3>
            <div className="flex gap-3">
              <SocialIcon link="https://facebook.com" Icon={Facebook} />
              <SocialIcon link="https://twitter.com" Icon={Twitter} />
              <SocialIcon link="https://instagram.com" Icon={Instagram} />
            </div>
          </div>
        </div>
      </div>

      {/* Big text */}
    <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
      <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-linear-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Simple'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Secure'] after:[text-shadow:0_1px_0_white]"></div>
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
        aria-hidden="true"
      >
        <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
      </div>
    </div>
    </footer>
  );
}

function SocialIcon({ link, Icon }) {
  return (
    <a href={link} className="p-2 text-gray-400 hover:text-white transition" target="_blank" rel="noopener noreferrer">
      <Icon size={22} />
    </a>
  );
}

export default Footer;
