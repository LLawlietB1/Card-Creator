import './footer.css'

const Footer = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://github.com/LLawlietB1" target="_blank" rel="noreferrer">
                        <img src="/image/git.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/lucas-nogueira-9866b01a2/" target="_blank" rel="noreferrer">
                        <img src="/image/lk.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://l1nk.dev/jVZAG" target="_blank" rel="noreferrer">
                        <img src="/image/wp.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/image/Card.png" alt="card" />
        </section>
        <section>
            <p>
                Desenvolvido por Lucas Nogueira.
            </p>
            <small>Agradecimento especial a Alura</small>
        </section>
    </footer>)
}

export default Footer 