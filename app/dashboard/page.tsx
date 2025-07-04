// app/dashboard/page.tsx
"use client";

import { useAuth } from "@/contexts/auth-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  const { admin, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (admin?.role === "user") {
    return (
      <div>
        <h1>Contact admin to upgrade your role.</h1>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-6 ">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>
         <Link href="/dashboard/temp">
          <Button className="hover:bg-green-600">Click me</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full" variant="outline">
                Edit Profile
              </Button>
              <Button className="w-full" variant="outline">
                Change Password
              </Button>
              <Link href="/settings">
                <Button className="w-full" variant="outline">
                  Settings
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">No recent activity</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Welcome to Your Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            This is your protected dashboard. You can only access this page when
            authenticated. The authentication system automatically handles token
            refresh and will redirect you to login if your session expires.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
