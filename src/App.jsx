import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
