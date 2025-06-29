'use client';

import { Button } from '@/components/ui/button';
import { logoutAction } from '@/lib/actions/auth';
import { Admin } from '@/types/auth';
import { useTransition } from 'react';

interface DashboardHeaderProps {
  admin: Admin;
}

export function DashboardHeader({ admin }: DashboardHeaderProps) {
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(async () => {
      await logoutAction();
    });
  };

  return (
    <header className="w-full bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-600">Welcome back, {admin.name}!</p>
          {/* <div className="text-sm text-gray-600">
            {admin.email}
          </div> */}
        </div>
        
        <div className="flex flex-col items-start gap-2 space-x-4">
          <Button
            variant="outline"
            onClick={handleLogout}
            disabled={isPending}
          >
            {isPending ? 'Signing out...' : 'Sign out'}
          </Button>
        </div>
      </div>
    </header>
  );
}