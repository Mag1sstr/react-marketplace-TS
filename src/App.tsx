import AppRoutes from "./components/AppRoutes/AppRoutes";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import Spinner from "./components/Spinner/Spinner";

function App() {
  // console.log(data);

  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;
