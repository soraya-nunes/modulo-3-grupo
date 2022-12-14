// eslint-disable-next-line
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Footer from "../componentes/Footer/Footer";
import NavBar from "../componentes/NavBar/NavBar";
import '../css/style_server.css';

const ImovelResidencialDetalhar = () => {
  const [loading, setLoading] = useState(false);
  const { empid } = useParams();
  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch("https://server-2.onrender.com/imovel_residencial/detalhar/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setLoading(false);
        empdatachange(resp);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      });
  }, [empid]);
  return (
    <div className="server_tudo">
      {loading ? (
        <ClipLoader
          className="server_animacao"
          color="#21d4fd"
          size={150}
          aria-label="Loading Spinner"
          data-
          testid="carregador"
        />
      ) : (
        <>
          <NavBar />
          <div className="server_container">
            <div className="server_card server_row" style={{ textAlign: "left" }}>
              <div className="server_card-title">
              <br></br>
                <h2 className="server_h2">Detalhe imóvel residencial</h2>
              </div>
              <div className="server_card-body"></div>

              {empdata && (
                <div>
                  <h5 className="server_h5">ID: {empdata.id}</h5>
                  <h2 className="server_h2">
                    Tipo de imóvel: <b className="server_b">{empdata.tipo_de_imovel}</b>
                  </h2>
                  <br></br>

                  <h5 className="server_h5">Área: {empdata.area}</h5>
                  <h5 className="server_h5">Quartos: {empdata.quartos}</h5>
                  <h5 className="server_h5">Banheiros: {empdata.banheiros}</h5>
                  <h5 className="server_h5">Garagens: {empdata.garagens}</h5>
                  <h5 className="server_h5">Endereço: {empdata.endereco}</h5>
                  <h5 className="server_h5">Tipo de contrato: {empdata.tipo_de_contrato}</h5>
                  <h5 className="server_h5">Valor do imóvel: {empdata.valor_do_imovel}</h5>
                  <h5 className="server_h5">Valor do condomínio: {empdata.valor_do_condominio}</h5>
                  <br></br>
                  
                  <Link to="/imoveis_residenciais/listar" className="server_btn server_btn-danger">Voltar</Link>
                  <br></br>
                  <br></br>
                </div>
              )}
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default ImovelResidencialDetalhar;
