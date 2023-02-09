  import './App.css';

  function App() {
    return (
      <div className="geral">
        <header className="titulo">
          <a href="https://reactjs.org/" target="_blank"><p>React JS</p></a>
        </header>

        <main className="conteudo">
        <section className="conteudo-topo">
          <h1>React JS</h1>
          <p>Biblioteca JavaScript para criar SPAs</p>
          <a href="https://reactjs.org/" target="_blank">Site oficial</a>
        </section>

        <section className="conteudo-requisitos">
          <h2>Requisitos</h2>
          <p>Veja abaixo os requisitos mínimos para aprender React JS:</p>
        
        <div className="conteudo-principal">
          <div className="conteudo-dados" >
            <h3>HTML</h3>
            <p>Aprender a estruturar os elementos da página com HTML</p>
          </div>
          <div className="conteudo-dados">
            <h3>CSS</h3>
            <p>Aprender a estilizar os elementos da página com CSS</p>
          </div>
          <div className="conteudo-dados">
            <h3>JavaScript</h3>
            <p>Aprender a linguagem utilizada pelo React JS, o JavaScript</p>
          </div>
        </div>
        </section>
        </main>

        <footer>
          <p>Curso de introdução de React JS</p>
        </footer>

      </div>
    );
  }

  export default App;
