import "./App.css";
import AppRoutes from "./Routing/AppRoutes";
import AppThemeProvider from "./theme/AppThemeProvider";

function App() {
  return (
    <AppThemeProvider>
      <AppRoutes />
    </AppThemeProvider>
  );
}

export default App;
