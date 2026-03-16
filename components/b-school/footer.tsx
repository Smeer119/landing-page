'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-[#1C1C1A] text-[#FAF7F2] px-4 md:px-8 py-16 md:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
        {/* Column 1: Brand */}
        <div>
          <h3 className="text-xl font-serif font-bold mb-2">Marie Forleo</h3>
          <p className="text-sm text-[#C49A3C] leading-relaxed">
            Building businesses you're proud of, one entrepreneur at a time.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-[#C49A3C] transition-colors">
                B-School
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#C49A3C] transition-colors">
                About Marie
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#C49A3C] transition-colors">
                Podcast
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#C49A3C] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Social */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">
            Connect
          </h4>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/marieforleo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 border border-[#FAF7F2] rounded-full flex items-center justify-center hover:bg-[#C45C3A] hover:border-[#C45C3A] transition-all text-xs text-[#FAF7F2]"
              aria-label="Instagram"
            >
              f
            </a>
            <a
              href="https://youtube.com/@marieforleo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 border border-[#FAF7F2] rounded-full flex items-center justify-center hover:bg-[#C45C3A] hover:border-[#C45C3A] transition-all text-xs text-[#FAF7F2]"
              aria-label="YouTube"
            >
              ⏺
            </a>
            <a
              href="https://facebook.com/marieforleo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 border border-[#FAF7F2] rounded-full flex items-center justify-center hover:bg-[#C45C3A] hover:border-[#C45C3A] transition-all text-xs text-[#FAF7F2]"
              aria-label="Facebook"
            >
              L
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#7A7470] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#C49A3C]">
        <p>&copy; 2024 Marie Forleo. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
