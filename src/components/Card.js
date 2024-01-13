






function Card() {

    return (
        <div className="card">
            <div className="favourite">
                <img src="img/heart-unlike.svg" alt="Unlike" /> 
            </div>
            <img width={133} height={112} src="/img/sneakers/sneakers-1.png" alt="Sneakers" />
            <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Ціна:</span>
                    <b>5 999 грн</b>
                </div>
                <div className="button">
                    <img width={32} height={32} src="/img/plus.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Card;
