import { useContext } from "react";
import { ShopContext } from "../context";


function BasketItem(props) {
    const {
        mainId,
        displayName,
        fullPrice,
        quantity,
    } = props;

    const {removeFromBasket, incrementItems, decrementItems} = useContext(ShopContext) 

    return (
        <li className="collection-item">
            {displayName} x{quantity} = {fullPrice * quantity} руб
            <span className="item-counter">
                <i className="material-icons basket-quantity" onClick={() => decrementItems(mainId)}>remove</i>
                <span>{quantity}</span>
                <i className="material-icons basket-quantity" onClick={() => incrementItems(mainId)}>add</i>
            </span>
            <span className="secondary-content" onClick={() => removeFromBasket(mainId)}>
                <i className="material-icons item-delete">close</i>
            </span>
        </li>)

}

export {BasketItem}