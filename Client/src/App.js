import { Route, Routes } from "react-router-dom";
import ExistingStock from "./Components/ExistingStock";
import Home from "./Components/Home";
import ListCommandes from "./Components/ListCommandes";
import ListStock from "./Components/ListStock";
import Login from "./Components/Login";
import NewCommande from "./Components/NewCommande";
import NewStock from "./Components/NewStock";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/home" exact element={<Home />} />
      <Route path="/new/stock" exact element={<NewStock />} />
      <Route path="/list/stock" exact element={<ListStock />} />
      <Route path="/new/commande" exact element={<NewCommande />} />
      <Route path="/existing/stock" exact element={<ExistingStock />} />
      <Route path="/list/commandes" exact element={<ListCommandes />} />
    </Routes>
  );
}

export default App;
