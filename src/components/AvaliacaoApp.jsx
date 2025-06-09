import { useState, useEffect } from "react";
import { Star } from "lucide-react";

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
        <div>
            <div className="avaliacao-app">
                <h2>Avalie nosso aplicativo</h2>
                <div className="avaliacao-estrelas">
                    {[1, 2, 3, 4, 5].map((estrela) => (
                        <Star
                            key={estrela}
                            className={`estrela ${nota >= estrela ? "ativa" : ""}`}
                            onClick={() => setNota(estrela)}
                        />
                    ))}
                </div>
                <textarea
                    placeholder="Deixe seu feedback..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                />
                <button onClick={enviarAvaliacao} disabled={nota === 0 || feedback.trim() === ""}>
                    Enviar Avaliação
                </button>
                {enviado && <p>Avaliação enviada com sucesso!</p>}
            </div>
            <div style={{ marginTop: "2em" }}>
                <h2>Avaliações dos usuários</h2>
                {feedbacks.length === 0 ? (
                    <p>Nenhuma avaliação ainda.</p>
                ) : (
                    <ul>
                        {feedbacks.map((f, index) => (
                            <li key={index}>
                                <strong>Usuário:</strong> {f.usuario}<br />
                                <strong>Nota:</strong> {f.rating} ⭐<br />
                                <strong>Comentário:</strong> {f.feedback}
                            </li>
                        ))}
                    </ul>

                )}
            </div>
        </div>
    );
}
