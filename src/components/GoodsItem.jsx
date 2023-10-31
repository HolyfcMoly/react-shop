import { useContext } from "react";
import { ShopContext } from "../context";

function GoodsItem(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        price,
        displayAssets,
    } = props;

    const {addToBasket} = useContext(ShopContext)

    const fullImg = displayAssets[1]
        ? displayAssets[1].full_background
        : displayAssets[0].full_background;
    const fullPrice = price.finalPrice;

    return (
        <div className="card" id={mainId}>
            <div className="card-image">
                <img src={fullImg} alt={displayName} />
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button
                    onClick={() =>
                        addToBasket({
                            mainId,
                            displayName,
                            fullPrice,
                        })
                    }
                    className="btn purple darken-3"
                >
                    Купить
                </button>
                <span className="right price">{fullPrice} руб.</span>
            </div>
        </div>
    );
}

export { GoodsItem };
