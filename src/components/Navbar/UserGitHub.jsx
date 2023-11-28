import { authUserSession } from "@/libs/auth";
import Link from "next/link";

const UserGitHub = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <div className="flex justify-between gap-2">
      {user ? (
        <Link href="/users/dashboard" className="bg-slate-950 text-zinc-50 py-1 px-12 hover:bg-zinc-50 hover:text-slate-950 transition-all">
          Dashboard
        </Link>
      ) : null}
      <Link href={actionURL} className="bg-slate-950 text-zinc-50 py-1 px-12 hover:bg-zinc-50 hover:text-slate-950 transition-all">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserGitHub;
