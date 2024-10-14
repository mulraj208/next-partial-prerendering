import { Metadata } from "next";
import { GlobalStyles } from "./styles";
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL("https://partialprerendering.com"),
  title: "Next.js Partial Prerendering",
  description: "A demo of Next.js using Partial Prerendering.",
  openGraph: {
    title: "Next.js Partial Prerendering",
    description: "A demo of Next.js using Partial Prerendering.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`[color-scheme:dark]`}>
      <head>
        <GlobalStyles />
      </head>
      <body className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')] pb-36">
        {children}
      </body>
    </html>
  );
}
