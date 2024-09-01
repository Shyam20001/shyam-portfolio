// components/App.tsx
import Header from "~/components/Header.tsx";
import Footer from "~/components/Footer.tsx";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
