import Providers from "./redux/Providers";

import Header from "./components/common/Header";

import "./globals.css";

export const metadata = {
  title: "St Commerce",
  description: "Built by Mohammad Yasin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
