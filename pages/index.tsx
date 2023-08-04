import type { NextPage } from 'next'
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Container, Form, Row, } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { ChangeEventHandler, useState, useEffect } from 'react';

const Products: NextPage = () => {
  const [selectedType, setSelectedType] = useState('All');
  const products = useSelector((state: RootState) => state.products);
  const options = ['All', ...new Set(products.map((product) => product.type))];
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setSelectedType(event.target.value);
  };


  useEffect(() => {
    if (selectedType === 'All') {
      setFilteredProducts(products);
    }

    if (selectedType !== 'All') {
      const filtered = products.filter((product) => product.type === selectedType);
      setFilteredProducts(filtered);
    }
  }, [selectedType, products]);

  return (
    <div className='products'>
      <div className='products__heading'>
        <div className='products__countProducts'>
          <span>
            Products / {products.length}
          </span>
        </div>
        <div>
          <span>
            Type:
          </span>
          <Form.Select
            aria-label="Default select example"
            value={selectedType}
            onChange={handleSelectChange}
            className='products__select'
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Form.Select>
        </div>

      </div>

      <div className='products__list'>
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default Products
