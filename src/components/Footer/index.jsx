import styles from "./styles.module.css";
import Input from "../Input/index.jsx";
import { Facebook, Instagram } from "lucide-react";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.social}>
          <p>ASSINE NOSSA NEWSLETTER</p>
          <Input placeholder={'E-mail'} iconName={'move-right'}/>
          <div>
            <a href=""><Instagram size={20}/></a>
            <a href=""><Facebook size={20}/></a>
          </div>
        </div>
        <div className={styles.links}>
          <p>DEPARTAMENTOS</p>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Seja Revendedor</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.rights}>
        <img src="/miniLogo.png" alt="" />
        <p>
          Copyright Brownie Its Cacau - 36676845000149 - 2025. Todos os direitos
          reservados.
        </p>
      </div>
    </div>
  );
}

export default Footer;
