import SearchBar from "./components/SearchBar";
import { StorageProvider } from "./context/SearchContext";
import ListProduct from "./product/page";

export default function Home() {
  return (
    <main>
      <StorageProvider>
        <div className="p-5">
          <SearchBar />
        </div>
        <ListProduct />
      </StorageProvider>
    </main>
  )
}
