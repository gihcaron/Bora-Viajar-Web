import Link from "next/link";
import styles from "./Termos.module.css";

export default function Termos() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Termos de Uso e Privacidade</h1>

            <div className={styles.content}>
                <h2 className={styles.subTitle}>1. Aceitação dos Termos</h2>
                <p className={styles.texto}>Ao acessar e utilizar o nosso site, você concorda com estes Termos de Uso e com a Política de Privacidade aqui descrita. Caso não concorde com os termos, por favor, não utilize a plataforma.</p>
            </div>

            <div className={styles.content}>
                <h2 className={styles.subTitle}>2.Objetivo da Plataforma</h2>
                <p className={styles.texto}>Nosso site tem como objetivo principal auxiliar usuários no planejamento de viagens nacionais de forma prática, segura e informada. Aqui, você pode encontrar dicas, avaliações e experiências reais de outros viajantes que usaram a plataforma para conhecer destinos turísticos pelo Brasil.</p>
            </div>
            <div className={styles.content}>
                <h2 className={styles.subTitle}>3. Cadastro de Usuário</h2>
                <p className={styles.texto}>Para acessar algumas funcionalidades, como criar postagens ou salvar destinos, é necessário criar uma conta. Ao se cadastrar, você se compromete a fornecer informações verdadeiras e manter sua conta segura.</p>
            </div>
            <div className={styles.content}>
                <h2 className={styles.subTitle}>4. Conteúdo Gerado por Usuários</h2>
                <p className={styles.texto}>Os usuários podem compartilhar relatos, avaliações e imagens dos destinos que visitaram. Ao publicar esse conteúdo, você declara que:
                    <p className={styles.topico}>É o autor do conteúdo ou tem permissão para publicá-lo;</p>
                    <p className={styles.topico}>Não incluirá material ofensivo, ilegal ou que infrinja direitos de terceiros;</p>
                    <p className={styles.topico}>Autoriza o site a exibir e, se necessário, moderar esse conteúdo para manter um ambiente seguro.</p>
                </p>
            </div>
            <div className={styles.content}>
                <h2 className={styles.subTitle}>5. Responsabilidades</h2>
                <p className={styles.texto}>Não nos responsabilizamos por danos causados por informações incorretas compartilhadas por outros usuários. Recomendamos sempre verificar detalhes e consultar fontes oficiais antes de viajar.</p>
            </div>
            <div className={styles.content}>
                <h2 className={styles.subTitle}>6. Privacidade dos Dados</h2>
                <p className={styles.texto}>Respeitamos sua privacidade. Os dados fornecidos no cadastro serão usados exclusivamente para fins de funcionamento do site e comunicação com o usuário. Não compartilhamos suas informações com terceiros sem seu consentimento.</p>
            </div>

            <div className={styles.button}>
                <Link href="/cadastro">
                    <button className={styles.button}>Voltar para o cadastro</button>
                </Link>
            </div>
        </div>
    )
}