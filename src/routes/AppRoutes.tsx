import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Conhecimentos } from "../pages/conhecimentos/Conhecimentos";
import { Formacao } from "../pages/formacao/Formacao";
import { Geral } from "../pages/geral/Geral";
import { Home } from "../pages/home/Home";
import { Clinica } from "../pages/projetos/clinica/Clinica";
import { CrudRecados } from "../pages/projetos/crudRecados/CrucRecados";
import { MarvelApi } from "../pages/projetos/marvelApi/MarvelApi";
import { OrderService } from "../pages/projetos/osSystem/OsSystem";
import { SistemaDeVagas } from "../pages/projetos/sistemaDeVagas/SistemaDeVagas";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conhecimentos" element={<Conhecimentos />} />
        <Route path="/formacao" element={<Formacao />} />
        <Route path="/geral" element={<Geral />} />
        <Route path="/projetos/clinica" element={<Clinica />} />
        <Route path="/projetos/crud-recados" element={<CrudRecados />} />
        <Route path="/projetos/marvel-api" element={<MarvelApi />} />
        <Route path="/projetos/order-service" element={<OrderService />} />
        <Route path="/projetos/sistema-de-vagas" element={<SistemaDeVagas />} />
      </Routes>
      </BrowserRouter>
    </>
  );
};
