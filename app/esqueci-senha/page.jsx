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
      return;
    }
    if (novaSenha !== confirmarSenha) {
      setToast("As senhas não coincidem.");
      return;
    }
    const contato = opcao === "email" ? email : `(${ddd}) ${telefone}`;
    setToast(`Senha alterada! Confirmação enviada para ${contato}.`);
  };

  const handleToastClose = () => {
    setToast("");
    router.push("/login");
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
        <input
          type="password"
          id="novaSenha"
          required
          value={novaSenha}
          onChange={e => setNovaSenha(e.target.value)}
          className={styles.input}
        />

        <label htmlFor="confirmarSenha">Confirmar nova senha:</label>
        <input
          type="password"
          id="confirmarSenha"
          required
          value={confirmarSenha}
          onChange={e => setConfirmarSenha(e.target.value)}
          className={styles.input}
        />

        <button
          type="submit"
          className={styles.btn}
        >
          Alterar senha
        </button>
      </form>

      {toast && (
        <div className={styles.toast}>
          {toast}
          <br />
          <button
            onClick={handleToastClose}
            className={styles.toastButton}
          >
            Voltar para a página de login
          </button>
        </div>
      )}
    </div>
  );
}