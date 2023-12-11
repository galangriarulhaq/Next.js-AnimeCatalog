import { authUserSession } from "@/libs/auth";
import Link from "next/link";

const UserGitHub = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <div className="flex justify-between gap-2">
      {user ? (
        <Link href="/users/dashboard" className="bg-slate-950 text-zinc-50 py-1 px-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-50 hover:text-indigo-950 duration-300 rounded">
          Dashboard
        </Link>
      ) : null}
      <Link href={actionURL} className="bg-slate-950 text-zinc-50 py-1 px-12 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-50 hover:text-indigo-950 duration-300 t rounded">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserGitHub;
