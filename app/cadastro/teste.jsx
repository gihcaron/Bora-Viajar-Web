"use client"

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

import Loader from "../../components/Loader";
import styles from "../teste/Teste.module.css";


export default function Teste() {
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

    const handleTeste= async (e) => {
        e.preventDefault();
        if (!usuario || !senha) {
          setToast("Preencha todos os campos para entrar.");
          setTimeout(() => setToast(""), 3000);
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
        <h1>Teste</h1>
        </div>
    );
    }
    
    return (
        <div className={styles.containerGeral}>
            <h1>Teste</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Usuário:</label>
                    <input
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "Esconder" : "Mostrar"}
                    </button>
                </div>
                <button type="submit">Entrar</button>
            </form>
            {toast && <p>{toast}</p>}
            {success && <p>Login realizado com sucesso!</p>}
        </div>
    );
