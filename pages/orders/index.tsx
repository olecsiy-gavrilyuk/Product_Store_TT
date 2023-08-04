import type { NextPage } from 'next'
import { useDispatch, useSelector } from 'react-redux';
import OrderCard from '../../components/OrderCard';
import { RootState } from '../../store';
import { useState } from 'react';
import OrderItems from '../../components/OrderItems';
import classNames from 'classnames';
import { addOrder } from '../../store/slices/ordersSlice';


const Orders: NextPage = () => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const orders = useSelector((state: RootState) => state.orders);
  const [currentOrder, setCurrentOrder] = useState({
    id: 0,
    title: '',
    date: '',
    description: '',
    producdId: [1],
  });
  const dispatch = useDispatch();
  
  const handleAddOrder = () => {
    const date = new Date();

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    const formattedDateTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;

    const newOrder = {
      id: orders.length + 1,
      title: '',
      date: formattedDateTime,
      description: '',
      producdId: [],
    };
    
    dispatch(addOrder(newOrder));
  };

  const handleOrderWindow = (id: number) => {

    if (isOrderOpen === false) {
      setIsOrderOpen(true);
    }
    const order = orders.find((item) => item.id === id);
    order ? setCurrentOrder(order) : null;

  }


  return (
    <div>
      <div className='orderHeading'>
        <button 
          className='orderButton'
          onClick={() => handleAddOrder()}>
          +
        </button>
        <span className='orderText'>
          Orders / {orders.length}
        </span>
      </div>
      <div className='order row gx-0'>
        <ul className={classNames('order__list', {
          'col': isOrderOpen === false,
          'col-4': isOrderOpen === true
        })}>
          {orders.map((order) => (
            <li key={order.id} className='order__item'>
              <OrderCard
                order={order}
                isOrderOpen={isOrderOpen}
                handleOrderWindow={handleOrderWindow}
                currentOrder={currentOrder}
              />
            </li>
          ))}
        </ul>

        {isOrderOpen && (
          <div className='col'>
            <OrderItems
              currentOrder={currentOrder}
              setIsOrderOpen={setIsOrderOpen}
              setCurrentOrder={setCurrentOrder}
            />
          </div>
        )}

      </div>
    </div>

  )
}

export default Orders