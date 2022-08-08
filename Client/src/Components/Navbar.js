import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

function Navbar() {
  const Navigate = useNavigate();

  const handleExistantStock = () => {
    Navigate("/existing/stock");
  };

  const handleNewCommande = () => {
    Navigate("/new/commande");
  };

  const handleListStock = () => {
    Navigate("/list/stock");
  };

  const handleListCommandes = () => {
    Navigate("/list/commandes");
  };

  const handleHome = () => {
    Navigate("/home");
  };

  const hanldeNewStock = () => {
    Navigate("/new/stock");
  };

  const handleLogOut = () => {
    Navigate("/");
  };
  return (
    <div>
      <nav
        class="navbar navbar-expand-sm navbar-dark bg-dark"
        aria-label="Third navbar example"
      >
        <div class="container-fluid">
          <a className="navbar-brand">Gestion Stock</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarsExample03"
          >
            <ul class="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" onClick={handleHome}>
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleNewCommande}>
                  Ajouter Commande
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleExistantStock}>
                  Ajouter Stock Existant
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={hanldeNewStock}>
                  Ajouter Nouveau Stock
                </a>
              </li>
              <li className="nav-item">
                <div class="dropdown">
                  <a
                    class="text-decoration-none nav-link dropdown-toggle"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Consulter
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        onClick={handleListStock}
                      >
                        Stock
                      </a>
                    </li>

                    <li>
                      <a
                        class="dropdown-item "
                        href="#"
                        onClick={handleListCommandes}
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        Ventes
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="my-2 my-md-0">
              {/* <Button type="primary" onClick={handleLogout}>
                {token ? "Se deconnecter" : "Se connecter"}
              </Button> */}
              <Button type="primary" onClick={handleLogOut}>
                se deconnecter
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
