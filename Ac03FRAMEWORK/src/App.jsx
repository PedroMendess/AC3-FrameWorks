import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [ra, setRa] = useState("");
  const [curso, setCurso] = useState("");

  const handleSubmit = () => {
    console.log("fui clicado");
    const json = {
      name: name,
      ra: ra,
      curso: curso,
    };
    console.log(json);
    axios
      .post("http://localhost:4040/cadastrar/Aluno", json)
      .then(() => {
        console.log("deu certo");
      })
      .catch(() => {
        console.log("deu ruim");
      });
  };
  return (
    <div>
      <label>Digite seu nome</label>
      <div>
        <input onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Qual seu RA?</label>
        <div>
          <input onChange={(e) => setRa(e.target.value)} />
        </div>
      </div>
      <div>
        <label>Qual curso?</label>
        <div>
          <input onChange={(e) => setCurso(e.target.value)} />
        </div>
      </div>
      <br></br>
      <div>
        <button onClick={handleSubmit}>Enviar dados</button>
      </div>
    </div>
  );
}

export default App;
