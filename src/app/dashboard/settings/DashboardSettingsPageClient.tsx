'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Settings, User, Bell, Shield, Globe } from 'lucide-react';
import Link from 'next/link';

export default function DashboardSettingsPageClient() {
  const fadeIn = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="flex min-h-screen bg-(--background)">
      {/* Sidebar */}
      <motion.aside
        className="w-64 bg-(--card) border-r border-(--border) flex flex-col"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-4 border-b border-(--border)">
          <h2 className="text-xl font-semibold text-(--foreground)">
            Dashboard
          </h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 p-2 text-sm font-medium text-(--foreground) hover:bg-(--primary) hover:text-(--primary-foreground) rounded-md transition-colors duration-200"
          >
            <User className="h-5 w-5" />
            Profile
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-2 p-2 text-sm font-medium text-(--foreground) bg-(--primary) text-(--primary-foreground) rounded-md transition-colors duration-200"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <motion.div className="max-w-4xl mx-auto" {...fadeIn}>
          <div className="mb-6">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 text-sm text-(--muted-foreground) hover:text-(--foreground) transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-(--foreground) mb-2">
              Settings
            </h1>
            <p className="text-lg text-(--muted-foreground)">
              Manage your account settings and preferences.
            </p>
          </div>

          <div className="space-y-6">
            {/* Account Settings */}
            <motion.div
              className="bg-(--card) p-6 rounded-lg border border-(--border) shadow-sm"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <User className="h-5 w-5 text-(--primary)" />
                <h3 className="text-xl font-semibold text-(--foreground)">
                  Account Settings
                </h3>
              </div>
              <p className="text-(--muted-foreground) mb-4">
                Update your account information and profile details.
              </p>
              <button className="px-4 py-2 bg-(--primary) text-(--primary-foreground) rounded-md hover:bg-(--primary)/90 transition-colors">
                Edit Profile
              </button>
            </motion.div>

            {/* Notification Settings */}
            <motion.div
              className="bg-(--card) p-6 rounded-lg border border-(--border) shadow-sm"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Bell className="h-5 w-5 text-(--primary)" />
                <h3 className="text-xl font-semibold text-(--foreground)">
                  Notifications
                </h3>
              </div>
              <p className="text-(--muted-foreground) mb-4">
                Manage your notification preferences.
              </p>
              <button className="px-4 py-2 bg-(--primary) text-(--primary-foreground) rounded-md hover:bg-(--primary)/90 transition-colors">
                Configure Notifications
              </button>
            </motion.div>

            {/* Privacy Settings */}
            <motion.div
              className="bg-(--card) p-6 rounded-lg border border-(--border) shadow-sm"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-5 w-5 text-(--primary)" />
                <h3 className="text-xl font-semibold text-(--foreground)">
                  Privacy & Security
                </h3>
              </div>
              <p className="text-(--muted-foreground) mb-4">
                Control your privacy settings and security options.
              </p>
              <button className="px-4 py-2 bg-(--primary) text-(--primary-foreground) rounded-md hover:bg-(--primary)/90 transition-colors">
                Manage Privacy
              </button>
            </motion.div>

            {/* Language & Region */}
            <motion.div
              className="bg-(--card) p-6 rounded-lg border border-(--border) shadow-sm"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-5 w-5 text-(--primary)" />
                <h3 className="text-xl font-semibold text-(--foreground)">
                  Language & Region
                </h3>
              </div>
              <p className="text-(--muted-foreground) mb-4">
                Set your preferred language and regional settings.
              </p>
              <button className="px-4 py-2 bg-(--primary) text-(--primary-foreground) rounded-md hover:bg-(--primary)/90 transition-colors">
                Change Settings
              </button>
            </motion.div>
          </div>

          {/* Internal Links */}
          <div className="mt-12 pt-8 border-t border-(--border)">
            <h2 className="text-xl font-semibold text-(--foreground) mb-4">
              Quick Links
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="text-(--primary) hover:underline"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-(--primary) hover:underline"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-(--primary) hover:underline"
              >
                Contact
              </Link>
              <Link
                href="/about"
                className="text-(--primary) hover:underline"
              >
                About Us
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
