import React from "react";
import Layout from "./Layout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Jewellery from "./components/Jewellery/Jewellery";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import Electronic from "./components/Electronic/Electronic";
import UserContextProvider from "./Context/UserContextProvider";

const components = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="electronics" element={<Electronic/>} />
      <Route path="jewellery" element={<Jewellery />} />
      <Route path="men" element={<Men />} />
      <Route path="women" element={<Women />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={components}></RouterProvider>
    </UserContextProvider>
  );
}

export default App;
