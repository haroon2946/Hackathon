import Header from './components/Header';
import ProductList from './components/ProductList';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header/>
      <section className="container mx-auto px-4">
        <ProductList/>
      </section>
    </main>
  );
}
