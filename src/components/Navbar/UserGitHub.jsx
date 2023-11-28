import { authUserSession } from "@/libs/auth";
import Link from "next/link";

const UserGitHub = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <div>
      <Link href={actionURL} className="">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserGitHub;
