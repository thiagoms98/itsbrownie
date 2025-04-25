import React from "react";
import styles from "./styles.module.css";
import { ChevronDown, Search, ShoppingBag, User } from "lucide-react";
import Input from "../Input";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.menu}>
        <img src="/logo-itsbrownie.png" alt="" height={40} width={100} />
        <nav>
          <ul className={styles.nav}>
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#about">Produtos {<ChevronDown size={14} />}</a>
            </li>
            <li>
              <a href="#services">Seja Revendedor</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.actions}>
        <Input placeholder="O que você está buscando?" iconName="search" />

        <div>
          <a href="#">
            {<User size={18} />} <span>Login/Cadastre-se</span>
          </a>
        </div>
        <div>
          <a href="#">
            {<ShoppingBag size={18} />} <span>Carrinho (0)</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
