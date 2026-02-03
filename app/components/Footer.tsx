import Link from 'next/link';
import { NAV_LINKS, SITE_CONFIG, SOCIAL_LINKS } from '../lib/constants';
import { FaDiscord, FaLinkedin, FaXTwitter, FaCalendar } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">{SITE_CONFIG.name}</h2>
            <p className="text-slate-400 max-w-sm">
              {SITE_CONFIG.description}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer" aria-label="Discord" className="hover:text-white transition-colors">
                <FaDiscord className="text-2xl" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-white transition-colors">
                <FaXTwitter className="text-2xl" />
              </a>
              <a href={SOCIAL_LINKS.luma} target="_blank" rel="noopener noreferrer" aria-label="Lu.ma" className="hover:text-white transition-colors">
                <FaCalendar className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {SITE_CONFIG.year} {SITE_CONFIG.name}. All rights reserved. • Made with ❤️ in Texas</p>
        </div>
      </div>
    </footer>
  );
}
