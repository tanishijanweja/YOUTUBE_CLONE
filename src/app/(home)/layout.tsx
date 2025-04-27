"use-client";
import { HomeLayout } from "@/modules/home/ui/layouts/home-layout";
import { TRPCProvider } from "@/trpc/client";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <HomeLayout>
      <TRPCProvider>{children}</TRPCProvider>
    </HomeLayout>
  );
};
export default Layout;
