import "./App.css";
import AppRoutes from "./Routing/AppRoutes";
import Providers from "./Providers";

function App() {
  return (
    <Providers>
      <AppRoutes />
    </Providers>
  );
}

export default App;
