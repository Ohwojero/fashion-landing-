
import { Montserrat, Playfair_Display } from 'next/font/google';
import './styles/main.scss'; 


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-playfair-display',
  display: 'swap',
});

export const metadata = {
  title: 'Bespoke Designs | [Designer Name]', 
  description: 'Discover uniquely crafted fashion pieces, tailored to perfection.', 
};

import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/Footer/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfairDisplay.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
