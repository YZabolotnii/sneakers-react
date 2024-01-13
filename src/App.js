// import './App.css';

function App() {
  return <div className="wrapper clear">
    <header className="d-flex justify-between align-center p-40">
      <div className="headerRight d-flex align-center">
        <img  width={40} height={40} src="../img/logo.png" alt="" />
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p>Магазин найкращих кросівок</p>
        </div>
      </div>
      <ul className="headerRight d-flex">
        <li className="mr-30">
          <img  width={20} height={20} src="../img/card.svg" alt="" />
          <span>1205 грн</span>
        </li>
        <li>
          <img  width={20} height={20} src="../img/user.svg" alt="" />
        </li>
      </ul>
    </header>
    <div className="content p-40">
      <h1 className="mb-40">Всі кросівки</h1>
      <div className="sneakers d-flex">
      <div className="card">
        <img width={133} height={112} src="/img/sneakers/sneakers-1.png" alt="" />
        <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Ціна:</span>
            <b>5 999 грн</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="card">
        <img width={133} height={112} src="/img/sneakers/sneakers-2.png" alt="" />
        <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Ціна:</span>
            <b>5 999 грн</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="card">
        <img width={133} height={112} src="/img/sneakers/sneakers-3.png" alt="" />
        <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Ціна:</span>
            <b>5 999 грн</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="card">
        <img width={133} height={112} src="/img/sneakers/sneakers-4.png" alt="" />
        <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Ціна:</span>
            <b>5 999 грн</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="" />
          </button>
        </div>
      </div>
      </div>
    </div>
  </div>;
}

export default App;
