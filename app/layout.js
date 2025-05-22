import { outfit, ovo } from "next/font/google";
import "./globals.css";

const outfit = outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"],
});

const ovo = ovo({
  subsets: ["latin"], weight: ["400"],
});

export const metadata = {
  title: "Portofolio Mavine",
  description: "software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
