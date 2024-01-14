import styles from './Card.module.scss';

function Card(props) {
    
    return (
        <div className={styles.card}>
            <div className="favourite">
                <img src="img/heart-unlike.svg" alt="Unlike" /> 
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Ціна:</span>
                    <b>{props.price} грн</b>
                </div> 
                <div className="button" onClick={props.onClick}>
                    <img width={32} height={32} src="/img/plus.svg" alt="" />
                </div>
            </div>
        </div>
    )

}

export default Card;
