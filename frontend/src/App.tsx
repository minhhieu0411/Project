import "./index.css"; 
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Your page content goes here */}
      </main>
      <Footer />
    </div>
  );
}

export default App
