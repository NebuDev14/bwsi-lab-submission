import { ChallengeStatus } from "@prisma/client";
import Link from "next/link";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";

export const ChallengeCard: React.FC<{
  name: string;
  desc: string;
  status: ChallengeStatus;
  link: string;
}> = ({ name, desc, status, link }) => {
  return (
    <div className="my-1 w-full px-1 hover:cursor-pointer md:w-1/2 lg:my-4 lg:w-1/3 lg:px-4">
      <Link href={link} passHref>
        <article className="overflow-hidden rounded-2xl border border-zinc-800 shadow-xl ">
          <div className="border-b border-yellow-300 bg-slate-900  px-4 py-6 pb-16">
            <h1 className="font-inte mb-4 block h-auto w-full  text-3xl font-semibold">
              {name}
            </h1>
            <p>{desc}</p>
          </div>

          <header className="flex items-center justify-between bg-zinc-800 p-2 leading-tight md:p-4">
            <div className="no-underline">
              {status === "COMPLETED" ? (
                <div className="flex items-center">
                  <AiOutlineCheckCircle
                    size={25}
                    className="mr-3 inline-block text-green-400"
                  />
                  <h1 className="text-lg">Completed</h1>
                </div>
              ) : (
                <div className="flex items-center">
                  <ImCross
                    size={20}
                    className="mr-3 inline-block text-red-500"
                  />
                  <h1 className="text-lg">Incomplete</h1>
                </div>
              )}
            </div>
          </header>
        </article>
      </Link>
    </div>
  );
};
