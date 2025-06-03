'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

import Loader from "../../components/Loader";
import styles from "../login/Login.module.css";

export default function Login() {
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [toast, setToast] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!usuario || !senha) {
      setToast("Preencha todos os campos para entrar.");
      setTimeout(() => setToast(""), 3000);
      return;
    }

    const senhaValida = senha.length >= 6 && /[!@#$%^&*(),.?":{}|<>]/.test(senha);
    if (!senhaValida) {
      setToast("A senha deve ter pelo menos 6 caracteres e conter pelo menos um caractere especial.");
      setTimeout(() => setToast(""), 4000);
      return;
    }
    setToast("");
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      router.push('/feed');
    }, 1500);
  };

  return (
    <div className={styles.containerGeral}>
      <div className={styles.pageContent}>
        <div className={styles.container}>
          <div className={styles.leftPanel}>
            <img src="/logo.png" alt="Logo" className={styles.logo} />
            <img src="/aviao3d.png" alt="Elemento avião 3D" className={styles.image} />
          </div>
          <div className={styles.rightPanel}>
            <h2>Bem-vindo e Bora Viajar!</h2>
            <p>Faça login para continuar.</p>
            <form onSubmit={handleLogin}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  placeholder="Usuário ou e-mail"
                  value={usuario}
                  onChange={e => setUsuario(e.target.value)}
                />
              </div>
              <div className={styles.formGroup} style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                  style={{ paddingRight: "40px" }}
                  autoComplete="new-password" 
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
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
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? (
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
              <div className={styles.forgotPassword}>
                <a href="/esqueci-senha">Esqueci a senha</a>
              </div>
              <button className={styles.btnLogin} type="submit">
                Entrar
              </button>
              <button className={styles.btnSignup} type="button" onClick={() => router.push('/cadastro')}>
                Cadastre-se
              </button>
            </form>
            {toast && (
              <div className={`${styles.toastSnackbar} ${styles.show}`}>
                {toast}
              </div>
            )}
            {success && (
              <div className={`${styles.toastSnackbar} ${styles.show} ${styles.success}`}>
                Login realizado com sucesso!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}