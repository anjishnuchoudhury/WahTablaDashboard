// app/dashboard/layout.tsx (Alternative client-side approach)
'use client';

import { AuthGuard } from '@/components/auth-guard';
import { DashboardHeader } from '@/components/dashboard-header';
import { useAuth } from '@/contexts/auth-context';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <DashboardContent>{children}</DashboardContent>
    </AuthGuard>
  );
}


function DashboardContent({ children }: { children: React.ReactNode }) {
  const { admin } = useAuth();
  console.log("admin data: ", admin)
  if (!admin) return null;

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-50">
      <DashboardHeader admin={admin} />
      <main className="container mx-auto py-6 px-4">
        {children}
      </main>
    </div>
  );
}