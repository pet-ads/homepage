import { AiOutlineCloudDownload } from "react-icons/ai";
import styles from "./Inscricoes.module.css";

function Inscricoes({ titulo, texto_1, email, texto_2, data, estado, texto_3 }) {
  return (
    <div className={styles.Inscricao}>
      <h2 className={styles.titulo}>{titulo}</h2>
      <p className={styles.texto}>
        {texto_1}
        <a className={styles.email} href="mailto:pet.ads.scl@ifsp.edu.br?subject=Processo seletivo PET/ADS">
          {email}
        </a>
      </p>
      <p className={styles.texto}>
        {texto_2} <span className={styles.encerrado}>{data}</span> {estado}
      </p>
      <p className={styles.texto}>Resultado da primeira etapa: <a href="https://drive.google.com/file/d/1rg9NGvPGc8DzVAaZRjR5x6KnQCShe8Rv/view" className={styles.resultLink}>Resultado da primeira etapa</a></p>
      <p className={styles.texto}>Resultado final: <a href="https://drive.google.com/file/d/1SRKhEMYmgxpfCN2x3bO9dqri3raoaGtq/view" className={styles.resultLink}>Resultado final</a> (<span style={{color: 'red'}}>novo</span>)</p>

      <p className={styles.texto}>{texto_3} </p>
      <p className={styles.download}>
        <a
          href="https://drive.google.com/file/d/1nRVPKXW2Yaf8g_9zOhYSRRiBRcnKchah/view?usp=drive_link"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineCloudDownload className={styles.btnDownload} />
        </a>
      </p>
    </div>
  );
}
export default Inscricoes;
