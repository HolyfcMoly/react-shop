import { useEffect, useContext } from "react";
import { ShopContext } from "../context";

function Alert() {
    const { alertName: displayName = '', closeAlert = Function.prototype} = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000)

        return () => {
            clearTimeout(timerId)
        }
        //eslint-disable-next-line
    },[displayName])
    return (
        <div className="toast-container">
            <div className="toast">{displayName} Добавлен в корзину</div>
        </div>
    )
}

export {Alert}