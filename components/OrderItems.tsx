import { Dispatch, FC, SetStateAction } from "react";
import { Order } from "../types/Order";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import OrderProduct from "./OrderProduct";

type Props = {
  currentOrder: Order;
  setIsOrderOpen: Dispatch<SetStateAction<boolean>>;
  setCurrentOrder:Dispatch<SetStateAction<{
    id: number;
    title: string;
    date: string;
    description: string;
    producdId: number[];
}>>;
}

const OrderItems: FC<Props> = ({ 
    currentOrder,
    setIsOrderOpen,
    setCurrentOrder,
  }) => {
    const products = useSelector((state: RootState) => state.products);
    const {
      id,
      producdId,
    } = currentOrder;

    const handleCloseInfo = () => {
      setIsOrderOpen(false);
      setCurrentOrder({
        id: 0,
        title: '',
        date: '',
        description: '',
        producdId: [1],
      })
    }

    function generateRandomId() {
      return Math.floor(Math.random() * 100000); 
    }
    

    const filteredProduct = products.filter((item) => producdId.includes(item.id))
  return (
    <div className="orderItems">
      <div className="orderItems__insideContainer">
        <p>Order {id}</p>

        <ul className="orderItems__productList">
          {filteredProduct.map((product) => (
            <li 
              className="orderItems__productItem"
              key={generateRandomId()}
            >
              <OrderProduct 
                product={product}
                currentOrder={currentOrder}
              />
            </li>
          ))}
        </ul>

        

      </div>
      <button 
        className="orderItems__buttonClose"
        onClick={() => handleCloseInfo()}
      >
        x
      </button>
    </div>
  )
}

export default OrderItems;