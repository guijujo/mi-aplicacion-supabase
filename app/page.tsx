import RepoButton from "../components/RepoButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import Header from "@/components/Header";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-10 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <RepoButton />
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-10 opacity-0 max-w-4xl px-3">
        <Header />
        <main className="flex-1 flex flex-col gap-6 text-center">
          <div className="flex justify-center">
            <Image
              src="/images/LogoTD.png"
              alt="Logo Talentos Digitales"
              width={300}
              height={300}
              className="aspect-square rounded"
              priority={true}
            />
          </div>
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
          </a> y <a
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
