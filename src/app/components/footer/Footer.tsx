const Footer : React.FC = () => {
    return (
        <>
            <div style={{ 
                    background: "#EEEEEE",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "34px"
                }}
                data-testid="footer"
            >
                MKS Sistemas © Todos os direitos reservados
            </div>
        </>
    );
}

export default Footer;