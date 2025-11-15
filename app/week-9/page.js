"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Week 9 – Login</h1>

      {!user && (
        <button
          onClick={gitHubSignIn}
          className="bg-black text-white p-2 rounded"
        >
          Sign in with GitHub
        </button>
      )}

      {user && (
        <div className="space-y-4">
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>

          <button
            onClick={firebaseSignOut}
            className="bg-red-500 text-white p-2 rounded"
          >
            Log Out
          </button>

          <Link
            href="/week-9/shopping-list"
            className="block text-blue-600 underline"
          >
            Go to Shopping List
          </Link>
        </div>
      )}
    </main>
  );
}
