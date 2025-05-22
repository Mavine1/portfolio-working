import { outfit, ovo } from "next/font/google";
import "./globals.css";

const geistSans = outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"],
  variable: "--font-geist-sans",
});

const geistMono = ovo({
  subsets: ["latin"], weight: ["400"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Portofolio Mavine",
  description: "software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${ovo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
