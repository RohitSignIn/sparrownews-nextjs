import Header from "@/components/Header";
import { ReactNode } from "react";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default MainLayout;
