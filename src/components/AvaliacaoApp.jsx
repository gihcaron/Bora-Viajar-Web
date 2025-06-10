import { useState, useEffect } from "react";
import styles from "../styles/Avaliacao.module.css";

export default function AvaliacaoApp() {
    const [feedback, setFeedback] = useState("");
    const [nota, setNota] = useState(0);
    const [enviado, setEnviado] = useState(false);
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/feedbacks", {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "B0raV1@j@2025"
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setFeedbacks(data);
                } else {
                    console.error("Resposta inesperada. Esperado um array em 'feedbacks':", data);
                }
            })
            .catch((err) => console.error("Erro ao buscar feedbacks:", err));
    }, []);

    const enviarAvaliacao = async () => {
        if (nota === 0 || feedback.trim() === "") return;
        try {
            await fetch("/api/avaliacao", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nota, feedback }),
            });

            setEnviado(true);
            setNota(0);
            setFeedback("");
        } catch (error) {
            console.error("Erro ao enviar avaliação:", error);
        }
    };

    return (
        <div className={styles.avaliacaoAppWrapper}>
            <div className={styles.avaliacaoApp}>
                <h2 className={styles.titulo}>Feedback dos usuários</h2>
                {feedbacks.length === 0 ? (
                    <div className={styles.semAvaliacao}>
                        <p>Nenhuma avaliação ainda.</p>
                    </div>
                ) : (
                    <div className={styles.listaAvaliacao}>
                        <ul>
                            {feedbacks.map((f, index) => (
                                <li key={index} className={styles.itemAvaliacao}>
                                    <div className={styles.usuario}>
                                        <strong>Usuário:</strong> {f.usuario}
                                    </div>
                                    <div className={styles.nota}>
                                        <strong>Nota:</strong> {f.rating} ⭐
                                    </div>
                                    <div className={styles.comentario}>
                                        <strong>Comentário:</strong> {f.feedback}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
