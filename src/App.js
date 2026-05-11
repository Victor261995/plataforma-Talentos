import {useLocation} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar";
import AppRoutes from "./Routes/Routes";

function App() {
  const location = useLocation();

  const showNavbar = location.pathname !== "/registro" && location.pathname !== "/login";

  return (
    
      <div className="app">
        {showNavbar && <Navbar />}
        <main className="content">
          <AppRoutes />
        </main>
      </div>
      

     
  );
}

export default App;