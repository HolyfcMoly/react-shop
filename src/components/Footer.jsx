function Footer() {
    return (
        <footer className="page-footer purple lighten-3">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="https://github.com/HolyfcMoly/react-shop" target="_blank" rel="noreferrer">
                        More Links
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
