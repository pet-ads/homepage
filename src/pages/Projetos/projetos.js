import "./projetos.css";
import React from "react";
import Header from "../../components/ui/Header/header";
import useIsMobile from "../../hooks/window/useIsMobile";
import FetchProj from "../../hooks/fetch/useFetchProjetos";
import CardProjeto from "./SubComponentes/CardProjeto/cardProjeto";

export default function Projetos() {
  const isMobile = useIsMobile();

  return (
    <>
      <div className="menu-projetos--corpo">
        <Header texto={isMobile ? "Projetos do PET/ADS" : "Projetos Desenvolvidos pelo PET/ADS"} />
        <section className="menu-projetos">
          <FetchProj
            render={(arrProjetos) =>
              arrProjetos
                .slice()
                .sort((a, b) => {
                  const statusOrder = {
                    "Em andamento": 1,
                    "Contínuo": 2,
                    "Concluído": 3,
                  };
                  return statusOrder[a.status] - statusOrder[b.status];
                })
                .map((projetos) => (
                  <CardProjeto
                    key={projetos.id}
                    titulo={projetos.titulo}
                    status={projetos.status}
                    tipo={projetos.tipo}
                    link={projetos.link}
                    descricao={projetos.descricao}
                    expandido={projetos.expandido}
                    tecnologias={projetos.tecnologias}
                    page={projetos.page}
                  ></CardProjeto>
                ))
            }
          />
        </section>
      </div>
    </>
  );
}
