import Header from "./components/Header";
import Experiencias from "./components/Experiencias";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="py-5">
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-col flex-1">
          <Experiencias />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
