import React from "react";
import styles from "./Inscricoes.module.css";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { drive, sendMail } from "../Constants/Constants";
import { InscricoesPropsI } from "../../../../types/TextTypes";

export default function Inscricoes({ title, introducao, email, prazo, data, estado, detalhes }: InscricoesPropsI) {
  return (
    <div className={styles.Inscricao}>
      <h2 className={styles.titulo}>{title}</h2>
      <p className={styles.texto}>
        {introducao}{" "}
        <a className={styles.email} href={sendMail}>
          {email}
        </a>
      </p>
      <p className={styles.texto}>
        {prazo} <span className={/*</p>styles.encerrado*/ ""}>{data}</span> {estado}
      </p>
      <p className={styles.texto}>{detalhes} </p>
      <p className={styles.download}>
        <a href={drive} rel="noreferrer" target="_blank">
          <AiOutlineCloudDownload className={styles.btnDownload} />
        </a>
      </p>
    </div>
  );
}
