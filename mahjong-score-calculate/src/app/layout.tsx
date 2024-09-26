import React from "react";

export const metadata = {
  title: "Mahjong Score Calculator",
  description: "A simple tool to calculate Mahjong scores",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header>
          <h1>Mahjong Score Calculator</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
