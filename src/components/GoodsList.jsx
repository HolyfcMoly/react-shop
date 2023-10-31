import { useContext } from "react";
import { ShopContext } from "../context";
import { GoodsItem } from "./GoodsItem";

function GoodsList() {
    const { 
        goods = [],
        loadMore,
    } = useContext(ShopContext)
    ;

    if (!goods.length) {
        return <h3>Nothing here</h3>;
    }

    const uniqueIds = new Set();
    const uniqueGoods = goods
        .filter((item) => {
            if (uniqueIds.has(item.mainId)) {
                return false;
            } else {
                uniqueIds.add(item.mainId);
                return true;
            }
        })
        .slice(0, loadMore);

    return (
        <div className="items">
            {uniqueGoods.map((item) => {
                return (
                    <GoodsItem
                        key={item.mainId}
                        {...item}
                    />
                );
            })}
        </div>
    );
}

export { GoodsList };
