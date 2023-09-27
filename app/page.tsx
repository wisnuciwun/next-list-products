import HeaderBar from "./components/HeaderBar";
import { StorageProvider } from "./context/SearchContext";
import ListProduct from "./product/page";

export default function Home() {
  return (
    <main>
      <StorageProvider>
        <div className="p-5">
          <HeaderBar />
        </div>
        <ListProduct />
      </StorageProvider>
    </main>
  )
}
