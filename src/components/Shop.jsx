import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setIsBasketShow] = useState(false);
    const [alertName, setAlertName] = useState("");
    const [loadMore, setLoadMore] = useState(10);

    const addToBasket = (item) => {
        const itemIndex = order.findIndex((el) => el.mainId === item.mainId);
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            setOrder([...newOrder]);
        }
        setAlertName(item.displayName);
    };

    const removeFromBasket = (itemId) => {
        const newOrder = order.filter((el) => el.mainId !== itemId);
        setOrder(newOrder);
    };

    const handleBasketShow = () => {
        setIsBasketShow(!isBasketShow);
    };

    const incrementItems = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.mainId === itemId) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity,
                };
            }
            return el;
        });
        setOrder(newOrder);
    };

    const decrementItems = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.mainId === itemId) {
                const newQuantity =
                    el.quantity <= 1 ? el.quantity : el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity,
                };
            }
            return el;
        });
        setOrder(newOrder);
    };

    const closeAlert = () => {
        setAlertName("");
    };

    const loadMoreCards = () => {
        setLoadMore((prev) => prev + 10);
    };

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.shop && setGoods(data.shop);
                setLoading(false);
            });
    }, []);

    return (
        <main className="container content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
            {loading ? (
                <Preloader />
            ) : (
                <GoodsList
                    goods={goods}
                    load={loadMore}
                    addToBasket={addToBasket}
                />
            )}
            {isBasketShow && (
                <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromBasket={removeFromBasket}
                    incrementItems={incrementItems}
                    decrementItems={decrementItems}
                />
            )}
            {alertName && (
                <Alert displayName={alertName} closeAlert={closeAlert} />
            )}
            {loadMore >= goods.length ? null : (
                <button className="btn load-more-btn purple darken-3" onClick={loadMoreCards}>
                    Load More
                </button>
            )}
        </main>
    );
}

export { Shop };
