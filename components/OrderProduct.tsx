import { FC } from "react"
import { Product } from "../types/Product"
import Image from 'next/legacy/image'
import GarbgeIcon from '../public/garbage.png';
import { useDispatch, useSelector } from "react-redux";
import { deleteProductFromOrder } from "../store/slices/ordersSlice";
import { Order } from "../types/Order";
import { RootState } from "../store";

type Props = {
  product: Product;
  currentOrder: Order;
}

const BASE_URL = 'https://server-g0z5.onrender.com/';

const OrderProduct: FC<Props> = ({ product,currentOrder }) => {
  const {
    id,
    photo,
    title,
    serialNumber,
  } = product;
  
  const orders = useSelector((state: RootState) => state.orders);
  const dispatch = useDispatch();

  const handleDeleteProduct = (productId: number, orderId: number) => {
    setTimeout(() => {
      dispatch(deleteProductFromOrder({ orderId, productId }));

    }, 0);

  };

  return (
    <div className="orderProduct">
      <div className="orderProduct__green_circle" />

      <div className="orderProduct__product_image">
        <Image
          src={`${BASE_URL}${photo}`}
          alt='product image'
          objectFit="contain"
          width={40}
          height={40}
        />
      </div>
      <div className="orderProduct__productInfo">
        <div className="orderProduct__productName">
          {title}
        </div>
        <div className="orderProduct__serialNumber">
          {serialNumber}
        </div>
      </div>
      <div className="orderProduct__status">
        Free
      </div>

      <div>
        <button className="orderProduct__buttonDelete">
          <Image
                src={GarbgeIcon}
                alt='icon delete item from list'
                width={25}
                height={25}
                onClick={() => handleDeleteProduct(id , currentOrder.id)}
              />
        </button>
      </div>
    </div>
  )
}

export default OrderProduct;