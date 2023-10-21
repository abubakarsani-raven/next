import { getAllUsers } from "@/lib/user.api";
import { UsersTypes } from "@/types/types";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
  description: "Aenerated by create next app",
};

export default async function UsersPage() {
  const userData: Promise<UsersTypes[]> = getAllUsers();

  const users = await userData;

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Users Page</h1>
      {users.map((user) => {
        return (
          <Link key={user.id} href={`/users/${user.id}`}>
            {user.name}
          </Link>
        );
      })}

      <Link href="/">Go to Home</Link>
    </div>
  );
}
