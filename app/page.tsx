import { StorageProvider } from "./context/SearchContext";
import ListProduct from "./product/page";


export default function Home() {
  return (
    <main>
      <StorageProvider>
        <ListProduct />
      </StorageProvider>
    </main>
  )
}
