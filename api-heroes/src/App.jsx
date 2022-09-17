import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./style.css";

function App() {
  const [heroe, setHeroes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/superheroes");
    const data = await response.json();
    setHeroes(data);
    console.log(data);
  };

  function ruta (e){
   
    if (e=="Marvel Comics"){
      return "marvel.png"
    }else{
      return "dc.png"
    }
    
  }

  return (
    <>
      <div className="App">
        <section className="container">
          <div className="row">
            {heroe.map((heroe) => (
              <div className="heroe d-sm-flex align-self-sm-stretch col-sm-3 col-md-3 col-lg-3">
                <div className="card m-2" key={heroe.id}>
                  <div className="card-body">
                    <h5 className="card-title">{heroe.nombre}</h5>
                    <img className="heroeimg" src={heroe.imagen} width="230" height="230" />
                    <p className="card-text">{heroe.descripcion}</p>
                    <img src={"src/" + ruta(heroe.editorial)} width="130" height="130" />
                    
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
