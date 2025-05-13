import styles from '..cadastro/Cadastro.module.css';

const Cadastro = () => {
    return (
        <div className={styles.cadastroWrapper}>
            <div className={styles.topBar}> 
                <h1 className={styles.title}>Contact Us</h1>
                {/*negocinho pra deixar o css bonito*/ }
                {/*Perguntar pra Laura se bota logo aqui tbm*/ }
                <p className={styles.subtitle}>Slogan impactantee !!! blá blá blá</p>
            </div>
            <div className={styles.form}>
                <div className={styles.nameBox}>
                    
                </div>

            </div>

        </div>
        
    );
}