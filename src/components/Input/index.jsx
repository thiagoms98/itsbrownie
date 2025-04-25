import React from "react";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";

const Input = ({ type, placeholder, value, onChange, iconName }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button>
        <DynamicIcon name={iconName} size={14} />
      </button>
    </div>
  );
};

export default Input;
