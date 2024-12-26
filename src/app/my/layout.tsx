import MypageNav from "@/components/layout/my/MypageNav";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
          <div style={{ width : "80%", height : "100%"}}>
            <MypageNav/>
            <div className="myPage">
              {children}
            </div>
          
          </div>
        </>
    );
  }
  