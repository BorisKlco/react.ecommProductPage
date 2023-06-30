import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContext from "./CartContext";
import Collections from "./Collections/Collections";
import Contact from "./Contact/Contact";
import Landing from "./Landing";
import Navbar from "./Navbar/Navbar";
import "./style.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const cart = useState(null);
  return (
    <div className="p-6 m-6">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <CartContext.Provider value={cart}>
            <Navbar />
            <Routes>
              <Route path="/collections/:id?" element={<Collections />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Landing />} />
            </Routes>
          </CartContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};
createRoot(document.getElementById("root")).render(<App />);
