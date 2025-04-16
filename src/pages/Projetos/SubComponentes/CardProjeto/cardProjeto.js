import "./cardProjeto.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaGraduationCap } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdExtension, MdOutlineComputer} from "react-icons/md";
import { GiMicroscope } from "react-icons/gi";
import { Tooltip } from "react-tooltip";

export default function CardProjeto(props) {
  const [isOpen, setIsOpen] = useState(false);
  function setingIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {!isOpen && (
        <motion.div className={isOpen ? "card aberto" : "card fechado"} onClick={setingIsOpen}>
          <motion.div className="logoConteinerOpenned">
            <motion.div className="logoConteiner">
            <span data-tooltip-id="tooltip-ensino" data-tooltip-content="Ensino">
              {props.tipo === "ensino" && <FaGraduationCap className="logo-projeto-dev" />}
            </span>
            <span data-tooltip-id="tooltip-pesquisa" data-tooltip-content="Pesquisa">
            {props.tipo === "pesquisa" && <GiMicroscope className="logo-projeto-microscope" />}  
            </span>
            <span data-tooltip-id="tooltip-extensao" data-tooltip-content="Extensão">
            {props.tipo === "extensão" && <MdExtension className="logo-projeto-dev" />}
            </span>

            <span data-tooltip-id="tooltip-desenvolvimento" data-tooltip-content="Desenvolvimento">
            {props.tipo === "extensão-desenvolivmento" && (
              <motion.a rel="noopener noreferrer" target="_blank" href={props.page}>
                <MdOutlineComputer className="logo-projeto-dev" />
              </motion.a>
            )}
            </span>
          
            <motion.a rel="noopener noreferrer" target="_blank" href={props.link}>
              <FaGithub className="Icon" />
            </motion.a>
            </motion.div>
            <motion.div className="status-fechado">{props.status}</motion.div>
          </motion.div>


          <motion.div>
            <motion.h2 className="card-titulo">{props.titulo}</motion.h2>
            <motion.p className="card-descricao">{props.descricao}</motion.p>
          </motion.div>
        </motion.div>

      )}

      {isOpen && (
        <>
          <div className="card_background" onClick={() => setIsOpen(!isOpen)}></div>
          <motion.div className={isOpen ? "card aberto" : "card fechado"}>
            <motion.div className="logoConteinerClosed">
              {props.tipo === "ensino" && <FaGraduationCap className="logo-projeto-dev" />}
              {props.tipo === "pesquisa" && <GiMicroscope className="logo-projeto-microscope" />}
              {props.tipo === "extensão" && <MdExtension className="logo-projeto-dev" />}
              {props.tipo === "extensão-desenvolivmento" && (
                <motion.a rel="noopener noreferrer" target="_blank" href={props.page}>
                  <MdOutlineComputer className="logo-projeto-dev" />
                </motion.a>
              )}
              
              <motion.a rel="noopener noreferrer" target="_blank" href={props.link}>
                <FaGithub className="icon-aberto" />
              </motion.a>
              <motion.div className="status-fechado-card">{props.status}</motion.div>
            </motion.div>
            <AiFillCloseCircle className="closeButton" onClick={() => setIsOpen(!isOpen)} />

            <motion.div>
              <motion.h2 className="card-titulo">
                {props.titulo}
              </motion.h2>
              <motion.div className="scrowSpace">
                <p className="card--texto__expandido">{props.expandido}</p>
                <div className="card--texto__envolvidos">
                  <p className="card--texto__expandido">{props.tecnologias} </p>
                  <p className="card--texto__expandido"></p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
      <Tooltip id="tooltip-ensino" className="tooltip" delayShow={300}/>
      <Tooltip id="tooltip-pesquisa" className="tooltip" delayShow={300}/>
      <Tooltip id="tooltip-extensao" className="tooltip" delayShow={300}/>
      <Tooltip id="tooltip-desenvolvimento" className="tooltip" delayShow={300}/>
    </>
  );
}
