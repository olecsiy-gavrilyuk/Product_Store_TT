import React, { FC } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { Product } from '../types/Product';
import Image from 'next/legacy/image'

const BASE_URL = 'https://server-g0z5.onrender.com/';


type Props = {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  const {
    photo,
    title,
    serialNumber,
    type,
    specification,
    guarantee,
    price,
  } = product;
  return (
    <div className='productCard'>
      <div className="productCard__green_circle" />
      <div className="productCard__imageproduct">
        <Image
          src={`${BASE_URL}${photo}`}
          alt='product image'
          width={50}
          objectFit='contain'
          height={50}
          className='p-1'
        />
      </div>

      <div className="productCard__productInfo">
        <div className="productCard__productName">
          {title}
        </div>
        <div className="productCard__serialNumber">
          {serialNumber}
        </div>
      </div>
      <div className='productCard__margin'>
        <Card.Text>Type: {type}</Card.Text>
      </div>
      <div className='productCard__margin'>
        <Card.Text>From: {guarantee.start}</Card.Text>
        <Card.Text>To: {guarantee.end}</Card.Text>
      </div>
      <div>
        <Card.Text>Price (USD): {price[0].value}</Card.Text>
        <Card.Text>Price (UAH): {price[1].value}</Card.Text>
      </div>
    </div>
  );
};

export default ProductCard;
