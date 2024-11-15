import Routes from "./routes";
import { useTheme } from "./ThemeContext";

const App = () => {
  const { isDark } = useTheme();
  return (
    <div className={`body ${isDark ? "dark" : ""}`}>
      <Routes />
    </div>
  );
};

export default App;
