import { authUserSession } from "@/libs/auth";
import Image from "next/image";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="text-zinc-50">
      <h3>Dashboard</h3>
      <h5>Welcome, {user?.name}</h5>
      <Image src={user?.image} alt="..." width={250} height={250} />
    </div>
  );
};

export default Page;
