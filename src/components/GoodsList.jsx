import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    const {goods = [], load, addToBasket = Function.prototype} = props;
    

    if(!goods.length) {
        return <h3>Nothing here</h3>
    }
    
    const uniqueIds = new Set();
    const uniqueGoods = goods.filter(item => {
        if(uniqueIds.has(item.mainId)) {
            return false;
        } else {
            uniqueIds.add(item.mainId);
            return true;
        }
    }).slice(0, load)
    
    return <div className="items">
        {uniqueGoods.map(item => {
            return <GoodsItem key={item.mainId} {...item} addToBasket={addToBasket}/>
        })}
    </div>
}

export {GoodsList}