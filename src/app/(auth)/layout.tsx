import { AuthLayout } from "@/components/tempates/auth-layout";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  );
}