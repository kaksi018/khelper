import type { Metadata } from "next";
import StyledJsxRegistry from "./registry";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalNav } from "@/components/global-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "K-HELPER",
  description:
    "새로운 인테리어 애프터써비스 k-helper / 전기,수도,벽지,싱크대,욕실,거실,상가,사무실 모든 시공및 수리 전문업",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <StyledJsxRegistry>
          <GluestackUIProvider mode="light">
            <GlobalNav />
            <div>
              <div className="lg:pl-72">{children}</div>
              <div className="lg:pl-72">footer</div>
            </div>
          </GluestackUIProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
