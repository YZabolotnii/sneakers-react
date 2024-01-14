import Card from './components/Card/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    title: 'Чоловічі Кросівки Nike Blazer Mid Suede', 
    price: 5999, 
    imageUrl: '/img/sneakers/sneakers-1.png'
  },
  {
    title: 'Чоловічі Кросівки Nike Air Max 270', 
    price: 4499, 
    imageUrl: '/img/sneakers/sneakers-2.png'
  },
  {
    title: 'Чоловічі Кросівки Nike Blazer Mid Suede', 
    price: 6099, 
    imageUrl: '/img/sneakers/sneakers-3.png'
  },
  {
    title: 'Кросівки Puma X Aka Boku Future Rider', 
    price: 9499, 
    imageUrl: '/img/sneakers/sneakers-4.png'
  },
];

function App() {
  return (
  <div className="wrapper clear">

    <Drawer/>
    <Header/>

    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>Всі кросівки</h1>
        <div className="search-block">
          <img src="img/loop.svg" alt="Search" />
          <input type="text" placeholder="Пошук..."/>
        </div>
      </div>
      <div className="sneakers d-flex">

        {arr.map((obj) => (
          <Card 
            title={obj.title} 
            price={obj.price} 
            imageUrl={obj.imageUrl}
            onClick={() => console.log(obj)}
          />
        ))}

      </div>
    </div>
  </div>
  )
}

export default App;
