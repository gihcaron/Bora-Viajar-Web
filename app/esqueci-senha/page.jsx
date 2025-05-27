'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from './EsqueciSenha.module.css';

export default function EsqueciSenhaPage() {
  const [nome, setNome] = useState("");
  const [opcao, setOpcao] = useState(""); 
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [ddd, setDdd] = useState("11");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [toast, setToast] = useState("");
  const [showNovaSenha, setShowNovaSenha] = useState(false);
  const [showConfirmarSenha, setShowConfirmarSenha] = useState(false);
  const router = useRouter();

  const ddds = [
    "11", "12", "13", "14", "15", "16", "17", "18", "19",
    "21", "22", "24", "27", "28",
    "31", "32", "33", "34", "35", "37", "38",
    "41", "42", "43", "44", "45", "46",
    "47", "48", "49",
    "51", "53", "54", "55",
    "61", "62", "64", "63", "65", "66", "67",
    "68", "69",
    "71", "73", "74", "75", "77", "79",
    "81", "82", "83", "84", "85", "86", "87", "88", "89",
    "91", "92", "93", "94", "95", "96", "97", "98", "99"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !opcao || (opcao === "email" && !email) || (opcao === "telefone" && !telefone) || !novaSenha || !confirmarSenha) {
      setToast("Preencha todos os campos obrigatórios.");
      setTimeout(() => setToast(""), 3000);
      return;
    }
    if (novaSenha !== confirmarSenha) {
      setToast("As senhas não coincidem.");
      setTimeout(() => setToast(""), 3000);
      return;
    }
    const contato = opcao === "email" ? email : `(${ddd}) ${telefone}`;
    setToast(`Senha alterada! Confirmação enviada para ${contato}.`);
    setTimeout(() => {
      setToast("");
      router.push("/login");
    }, 2500); 
  };

  return (
    <div className={styles.wrapper}>
      <img src="/logo.png" alt="Logo" className={styles.logo} />
      <h2 className={styles.title}>Redefinir senha</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>Nome completo:</label>
        <input
          type="text"
          id="nome"
          required
          value={nome}
          onChange={e => setNome(e.target.value)}
          className={styles.input}
        />

        <label>Como deseja receber a confirmação?</label>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="opcao"
              value="email"
              checked={opcao === "email"}
              onChange={() => setOpcao("email")}
            /> E-mail
          </label>
          <label>
            <input
              type="radio"
              name="opcao"
              value="telefone"
              checked={opcao === "telefone"}
              onChange={() => setOpcao("telefone")}
            /> Telefone
          </label>
        </div>

        {opcao === "email" && (
          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>
        )}

        {opcao === "telefone" && (
          <div className={styles.inputGroup}>
            <label htmlFor="telefone">Telefone:</label>
            <div className={styles.telefoneGroup}>
              <select
                value={ddd}
                onChange={e => setDdd(e.target.value)}
                className={styles.dddSelect}
              >
                {ddds.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <input
                type="tel"
                id="telefone"
                required
                placeholder="Número"
                value={telefone}
                onChange={e => setTelefone(e.target.value)}
                className={styles.telefoneInput}
                pattern="[0-9]{8,9}"
                maxLength={9}
              />
            </div>
          </div>
        )}

        <label htmlFor="novaSenha">Nova senha:</label>
        <div style={{ position: "relative" }}>
          <input
            type={showNovaSenha ? "text" : "password"}
            id="novaSenha"
            required
            value={novaSenha}
            onChange={e => setNovaSenha(e.target.value)}
            className={styles.input}
            style={{ paddingRight: "40px" }}
          />
          <button
            type="button"
            onClick={() => setShowNovaSenha(v => !v)}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0
            }}
            tabIndex={-1}
            aria-label={showNovaSenha ? "Ocultar senha" : "Mostrar senha"}
          >
            {showNovaSenha ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M17.94 17.94C16.13 19.17 14.13 20 12 20C7 20 2.73 16.11 1 12C1.73 10.21 2.91 8.6 4.44 7.35M9.9 5.08C10.59 5.03 11.29 5 12 5C17 5 21.27 8.89 23 13C22.37 14.53 21.37 15.89 20.11 17M1 1L23 23" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12C2.73 16.11 7 20 12 20C17 20 21.27 16.11 23 12C21.27 7.89 17 4 12 4C7 4 2.73 7.89 1 12Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>

        <label htmlFor="confirmarSenha">Confirmar nova senha:</label>
        <div style={{ position: "relative" }}>
          <input
            type={showConfirmarSenha ? "text" : "password"}
            id="confirmarSenha"
            required
            value={confirmarSenha}
            onChange={e => setConfirmarSenha(e.target.value)}
            className={styles.input}
            style={{ paddingRight: "40px" }}
          />
          <button
            type="button"
            onClick={() => setShowConfirmarSenha(v => !v)}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0
            }}
            tabIndex={-1}
            aria-label={showConfirmarSenha ? "Ocultar senha" : "Mostrar senha"}
          >
            {showConfirmarSenha ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M17.94 17.94C16.13 19.17 14.13 20 12 20C7 20 2.73 16.11 1 12C1.73 10.21 2.91 8.6 4.44 7.35M9.9 5.08C10.59 5.03 11.29 5 12 5C17 5 21.27 8.89 23 13C22.37 14.53 21.37 15.89 20.11 17M1 1L23 23" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12C2.73 16.11 7 20 12 20C17 20 21.27 16.11 23 12C21.27 7.89 17 4 12 4C7 4 2.73 7.89 1 12Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>

        <button
          type="submit"
          className={styles.btn}
        >
          Alterar senha
        </button>
      </form>

      {toast && (
        <div
          className={
            `${styles.toastSnackbar} ${styles.show}` +
            (toast.startsWith("Senha alterada!") ? ` ${styles.success}` : "")
          }
        >
          {toast}
        </div>
      )}
    </div>
  );
}