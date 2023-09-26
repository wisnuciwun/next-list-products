import SearchBar from "./components/SearchBar";
import { StorageProvider } from "./context/SearchContext";
import ListProduct from "./product/page";


export default function Home() {
  return (
    <main>
      <div className="p-5">
        <SearchBar />
      </div>
      <StorageProvider>
        <ListProduct />
      </StorageProvider>
    </main>
  )
}
