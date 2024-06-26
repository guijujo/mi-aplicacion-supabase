import RepoButton from "@/components/RepoButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ProductoCard } from "@/components/ProductoCard";

export const revalidate = 0;

export default async function DashboardPage() {
  const supabase = createClient()

  const {
    data: { user },

    error: userError,
  } = await supabase.auth.getUser();
  console.log(user);

  if (!user) {
    return redirect("/login");
  }

  const { data, error } = await supabase.from("products").select("*");
  console.log(data);

  if (error) {
    console.error("Error fetching productos:", error);
    return <div>Error encontrando los productos: {error.message}</div>;
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Volver
      </Link>
      <div className="w-full">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <RepoButton />
            <AuthButton />
          </div>
        </nav>
      </div>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <Header />
        <main className="flex-1 flex flex-col items-center gap-6">
          <div className="uppercase">Productos</div>
          <div className="flex items-center gap-y-8 gap-x-2 flex-wrap">
            {data?.map((producto: any) => (
              <ProductoCard producto={producto} key={producto.id} />
            ))}
          </div>
          <Link href="/dashboard/productos/create">Artículo nuevo</Link>
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Realizado por{" "}
          <a
            href="https://www.linkedin.com/in/guijujo/"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Guillermo García
          </a>{" "}
          y{" "}
          <a
            href="https://github.com/Alejandromarmilich"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Alejandro Herrera
          </a>
        </p>
      </footer>
    </div>
  );
}
