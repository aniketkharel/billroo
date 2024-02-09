import NextLink from "next/link";

export default function Page() {
  return (
    <main>
      <div className="">
        Your own Budget Manager <b>Billroo</b>
      </div>
      <div className="">
        <div className="">
          <NextLink href="/dashboard">
            <button className="border border-zinc-400 p-2 rounded-md">
              Dashboard
            </button>
          </NextLink>
        </div>
      </div>
    </main>
  );
}
