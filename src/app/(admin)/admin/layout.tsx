import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import Navbar from "@/src/components/admin/headers/Nav-bar/navbar";
export const metadata: Metadata = {
  title: "Webstack | admin",
  description: "Generated by create next app",
};
export default function ({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Theme grayColor="mauve" appearance="dark" radius="large">
          <Navbar />
          {children}
        </Theme>
      </body>
    </html>
  );
}
