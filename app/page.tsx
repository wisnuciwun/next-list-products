import { StorageProvider } from "./context/SearchContext";
import ListProduct from "./product/page";

export default function Home() {
  return (
    <main className="flex min-h-screen gap-3 items-center justify-center p-24 flex-wrap">
      <StorageProvider>
        <ListProduct />
      </StorageProvider>
    </main>
  )
}
