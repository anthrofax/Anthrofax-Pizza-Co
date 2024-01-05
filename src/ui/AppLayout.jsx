import CartOverview from "../features/cart/CartOverview.jsx";
import Header from "./Header.jsx";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader.jsx";

function AppLayout() {
  const {state} = useNavigation();
  const isLoading = state === 'loading'
  
  return (
    <div className="layout">
      {isLoading && <Loader/>}
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
