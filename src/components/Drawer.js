function Drawer() {
    return (
      <div style={{ display: 'none' }} className="overlay">
        <div className="drawer">
          <h2 className="mb-30 justify-between d-flex">
            Корзина 
            <img className="cu-p" width={32} height={32} src="/img/btn-remove.svg" alt="remove" />
          </h2>
  
          <div className="cart-items mb-40">
            <div className="cart-item d-flex align-center mb-20">
              <div style={{ backgroundImage: 'url(/img/sneakers/sneakers-1.png)' }} className="cart-item-img"></div>
              <div className="mr-20 flex">
                <p className="mb-5">Чоловічі кросівки Nike Blazer Mid Suede</p>
                <b>5 999 грн</b>
              </div>
              <img className="remove-btn" width={32} height={32} src="/img/btn-remove.svg" alt="remove" />
            </div>
            
            <div className="cart-item d-flex align-center mb-20">
              <div style={{ backgroundImage: 'url(/img/sneakers/sneakers-2.png)' }} className="cart-item-img"></div>
              <div className="mr-20 flex">
                <p className="mb-5">Чоловічі кросівки Nike Blazer Mid Suede</p>
                <b>5 999 грн</b>
              </div>
              <img className="remove-btn" width={32} height={32} src="/img/btn-remove.svg" alt="Sneakers" />
            </div>
            
            <div className="cart-item d-flex align-center ">
              <div style={{ backgroundImage: 'url(/img/sneakers/sneakers-3.png)' }} className="cart-item-img"></div>
              <div className="mr-20 flex">
                <p className="mb-5">Чоловічі кросівки Nike Blazer Mid Suede</p>
                <b>5 999 грн</b>
              </div>
              <img className="remove-btn" width={32} height={32} src="/img/btn-remove.svg" alt="Sneakers" />
            </div>
          </div>
  
          <div className="cartTotalBlock">
            <ul className="cart-total-block">
              <li>
                <span>Всього</span>
                <div></div>
                <b>10 520 грн</b>
              </li>
            <li>
                <span>Податок 5%:</span>
                <div></div>
                <b>521 грн</b>
              </li>
            </ul>
            <button className="greenButton">Оформити замовлення <img src="/img/arrow.svg" alt="" /> </button>
          </div>
        </div>
      </div>
    )
}

export default Drawer;