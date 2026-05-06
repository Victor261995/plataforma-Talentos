import Navbar from "./Components/Navbar/Navbar";
import AppRoutes from "./Routes/Routes";

function App() {
  return (
    
      <div className="app">
        <Navbar />
        <main className="content">
          <AppRoutes />
        </main>
      </div>
      

     
  );
}

export default App;