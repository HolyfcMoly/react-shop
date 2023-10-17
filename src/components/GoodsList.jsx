import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    const {goods = []} = props;
    
    if(!goods.length) {
        return <h3>Nothing here</h3>
    }
    
    return <div className="items">
        {goods.map(item => {
            return <GoodsItem key={item.mainId} {...item}/>
        })}
    </div>
}

export {GoodsList}