import NextLink from "next/link";

export default function Budget() {
  return (
    <main>
      <div className="">
        <b>Dashboard Page</b>
      </div>
      <div className="">
        <NextLink href="/">
          <button className="border border-zinc-400 p-2 rounded-md">
            Home
          </button>
        </NextLink>
      </div>
    </main>
  );
}
