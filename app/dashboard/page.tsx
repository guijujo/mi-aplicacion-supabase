import RepoButton from "@/components/RepoButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ProductoCard } from "@/components/producto-card";

export default async function DashboardPage() {
  const supabase = createClient();
  const { data: productos, error } = await supabase
    .from("productos")
    .select("*");
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
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
        <main className="flex-1 flex flex-col gap-6">
          <div>Productos</div>
          <div className="flex items-center gap-y-8 gap-x-2 flex-wrap">
            {productos?.map((producto: any) => (
              <ProductoCard producto={producto} key={producto.name.common} />
            ))}
            <Link href="/dashboard/productos/create">Artículo nuevo</Link>
          </div>
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Realizado por{" "}
          <a
            href=""
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Guillermo García
          </a>
        </p>
      </footer>
    </div>
  );
}
