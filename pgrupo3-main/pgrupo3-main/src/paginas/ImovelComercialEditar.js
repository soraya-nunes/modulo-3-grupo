// eslint-disable-next-line
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import swal from 'sweetalert';
import Footer from "../componentes/Footer/Footer";
import NavBar from "../componentes/NavBar/NavBar";
import '../css/style_server.css';


const ImovelComercialEditar = () => {
  const [loading, setLoading] = useState(false);
  const { empid } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch("https://server-2.onrender.com/imovel_comercial/editar/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setLoading(false);
        idchange(resp.id);
        tipo_de_imovelchange(resp.tipo_de_imovel);
        enderecochange(resp.endereco);
        salaschange(resp.salas);
        banheiroschange(resp.banheiros);
        garagenschange(resp.garagens);
        tipo_de_contratochange(resp.tipo_de_contrato);
        valor_do_imovelchange(resp.valor_do_imovel);
        valor_do_condominiochange(resp.valor_do_condominio);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      });
  }, [empid]);

  const [id, idchange] = useState("");
  const [tipo_de_imovel, tipo_de_imovelchange] = useState("");
  const [endereco, enderecochange] = useState("");
  const [salas, salaschange] = useState("");
  const [banheiros, banheiroschange] = useState("");
  const [garagens, garagenschange] = useState("");
  const [tipo_de_contrato, tipo_de_contratochange] = useState("");
  const [valor_do_imovel, valor_do_imovelchange] = useState("");
  const [valor_do_condominio, valor_do_condominiochange] = useState("");

  const [validation, valchange] = useState(false);

  console.log(validation);

  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { id, tipo_de_imovel, endereco, salas, banheiros, garagens, tipo_de_contrato, valor_do_imovel, valor_do_condominio };

    setLoading(false);
    fetch("https://server-2.onrender.com/imovel_comercial/editar/" + empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        setLoading(false);

        swal("Concluído", "Editada com sucesso!", "success");
        navigate("/imoveis_comerciais/listar/");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      });
  };
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
          <div className="server_row">
            <div className="server_offset-lg-3 col-lg-6">
              <form className="server_container" onSubmit={handlesubmit}>
                <div className="server_card" style={{ textAlign: "left" }}>
                  <div className="server_card-title">
                  <br></br>
                    <h2 className="server_h2">&nbsp;&nbsp;Editar imóvel comercial</h2>
                  </div>
                  <div className="server_card-body">
                    <div className="server_row">
                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">ID</b>
                          </label>
                          <input value={id} disabled="disabled" className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">Tipo de imóvel</b>
                          </label>
                          <input required value={tipo_de_imovel} onMouseDown={(e) => valchange(true)} onChange={(e) => tipo_de_imovelchange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">Endereço</b>
                          </label>
                          <input required value={endereco} onMouseDown={(e) => valchange(true)} onChange={(e) => enderecochange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">Salas</b>
                          </label>
                          <input required value={salas} onMouseDown={(e) => valchange(true)} onChange={(e) => salaschange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">Banheiros</b>
                          </label>
                          <input required value={banheiros} onMouseDown={(e) => valchange(true)} onChange={(e) => banheiroschange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>
                      
                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">Garagens</b>
                          </label>
                          <input required value={garagens} onMouseDown={(e) => valchange(true)} onChange={(e) => garagenschange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">Tipo de contrato</b>
                          </label>
                          <input required value={tipo_de_contrato} onMouseDown={(e) => valchange(true)} onChange={(e) => tipo_de_contratochange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">Tipo de imóvel</b>
                          </label>
                          <input required value={valor_do_imovel} onMouseDown={(e) => valchange(true)} onChange={(e) => valor_do_imovelchange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <label className="server_label">
                            <b className="server_b">Valor do condomínio</b>
                          </label>
                          <input required value={valor_do_condominio} onMouseDown={(e) => valchange(true)} onChange={(e) => valor_do_condominiochange(e.target.value)} className="server_form-control"></input>
                        </div>
                      </div>

                      <div className="server_col-lg-12">
                        <div className="form-group">
                          <br></br>
                          <button className="server_btn server_btn-success" type="submit">
                            Salvar
                          </button>
                          &nbsp;
                          <Link to="/imoveis_comerciais/listar" className="server_btn server_btn-danger">Voltar</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default ImovelComercialEditar;
