import React, { Dispatch, FC, SetStateAction } from 'react';
import { Card } from 'react-bootstrap';
import Image from 'next/image'
import { Order } from '../types/Order';
import ListIcon from '../public/btnIcon.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { Product } from '../types/Product';
import GarbgeIcon from '../public/garbage.png';
import { removeOrder } from '../store/slices/ordersSlice';
import ArrowRigth from '../public/rightArrow.png';



type Props = {
  order: Order;
  isOrderOpen: boolean;
  handleOrderWindow: (id: number) => void;
  currentOrder: Order;
}

const OrderCard: FC<Props> = ({ 
  order,
  isOrderOpen,
  handleOrderWindow,
  currentOrder,
}) => {
  const {
    id,
    title,
    date,
    description,
    producdId,
  } = order;
  const products = useSelector((state: RootState) => state.products);
  const ordersProducts = products.filter((product) => producdId.includes(product.id));
  const dispatch = useDispatch();

  const handleRemoveOrder = () => {
    dispatch(removeOrder(order.id));
  };

  const dividedData = date.split(' ');

  const formatDate = (inputDate: string) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];    

    const dateParts = inputDate.split('/');
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1;
    const day = parseInt(dateParts[2]);

    return `${day} ${months[month]} ${year} p.`;
  };

  const calculateTotalPrices = (arrProduct: Product[]) => {
    const usdTotal = arrProduct.reduce((total, product) => {
      const usdPrice = product.price.find((item) => item.symbol === 'USD');
      if (usdPrice) {
        total += usdPrice.value;
      }
      return total;
    }, 0);

    const uahTotal = arrProduct.reduce((total, product) => {
      const uahPrice = product.price.find((item) => item.symbol === 'UAH');
      if (uahPrice) {
        total += uahPrice.value;
      }
      return total;
    }, 0);

    return [usdTotal, uahTotal];
  };

  const totalPrices = calculateTotalPrices(ordersProducts);
  return (
        <div className="orderCard">
          {!isOrderOpen && (
            <div >
              <Card.Title>
                Order {id}
              </Card.Title>
          </div>
          )}
          

          <button 
            className='orderCard__button'
            onClick={() => handleOrderWindow(id)}
          >
            <Image
              src={ListIcon}
              alt='icon list button'
              width={20}
              height={20}

            />
          </button>

          <div className='orderCard__countProducts'>
            {producdId.length}<br />
            <span className='orderCard__text'>
              Products
            </span>
          </div>

          <div className='orderCard__date'>
            <span className='orderCard__text-grey'>
              {dividedData[0]}
            </span>
            <br />
            <span className='orderCard__text'>
              {formatDate(dividedData[0])}
            </span>
          </div>

          {!isOrderOpen && (
            <div className='orderCard__date'>
              <span className='orderCard__text'>
                {parseFloat(totalPrices[0].toFixed(2))} $
              </span>
              <br />
              <span>
                {parseFloat(totalPrices[1].toFixed(2))} UAH
              </span>
            </div>
          )}

          {currentOrder.id !== id  && (
            <button className='orderCard__button'>
              <Image
                src={GarbgeIcon}
                alt='icon delete item from list'
                width={20}
                height={20}
                onClick={handleRemoveOrder}
              />
            </button>
          )}

          {(currentOrder.id === id && isOrderOpen) && (
            <div className='orderCard__arrowImg'>
              <Image 
                src={ArrowRigth}
                alt='arrow right'
                width={20}
                height={20}/>
            </div>
          )}
        </div>
  );
};

export default OrderCard;