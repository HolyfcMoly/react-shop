import { BasketItem } from "./BasketItem";

function BasketList(props) {
    const { 
        order = [], 
        handleBasketShow = Function.prototype, 
        removeFromBasket = Function.prototype, 
        incrementItems,
        decrementItems,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.fullPrice * el.quantity
    }, 0)

    return (
        <ul className="collection basket-list">
            <li className="collection-item purple darken-1 collection-item-basket">Корзина</li>
            {order.length ? (
                order.map((item) => {
                    return <BasketItem key={item.mainId} {...item} 
                    removeFromBasket={removeFromBasket} 
                    incrementItems={incrementItems}
                    decrementItems={decrementItems}/>;
                })
            ) : (
                <li className="collection-item">
                    Корзина пуста
                </li>
            )}
            <li className="collection-item purple darken-1 collection-item-basket">
                <span>Общая стоимость: {totalPrice} руб</span>
                <button className="btn-small purple darken-3">Оформить</button>
            </li>
            <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
        </ul>
    );
}

export { BasketList };
