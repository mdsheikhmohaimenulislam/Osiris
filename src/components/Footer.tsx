import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/" className="link link-hover">Home</Link>
        <Link href="/about" className="link link-hover">About Us</Link>
        <Link href="/contact" className="link link-hover">Contact</Link>
        <Link href="/privacy" className="link link-hover">Privacy Policy</Link>
      </nav>
      <aside>
        <p>Copyright © 2025 - All right reserved by Osiris</p>
      </aside>
    </footer>
  );
};

export default Footer;