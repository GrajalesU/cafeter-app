import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from '../ProductList/index.js';
import Statistics from '../Statistics/index.js';

function Product() {
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [sellingAmmount, setSellingAmmount] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const initialAmmount = {};
    fetch('http://localhost:3001/')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        data.forEach((product) => {
          initialAmmount[product.id] = 0;
        });
        setSellingAmmount(initialAmmount);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 align-middle w-full content-center ">
      <h1 className="font-bold text-center text-xl text-amber-900">PRODUCTOS</h1>
      <div className="text-center my-4">
        <button
          type="button"
          className=" hover:bg-amber-900 text-amber-800 font-semibold hover:text-white py-2 px-6 border border-blue-amber-800 hover:border-transparent rounded"
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          {isEditing ? 'VENDER' : 'EDITAR'}
        </button>
        {isEditing && (
        <button
          type="button"
          className="ml-10 hover:bg-amber-900 text-amber-800 font-semibold hover:text-white py-2 px-6 border border-blue-amber-800 hover:border-transparent rounded"
          onClick={() => {
            navigate('/add');
          }}

        >
          AÑADIR
        </button>
        )}
      </div>
      <ProductList
        isEditing={isEditing}
        products={products}
        setProducts={setProducts}
        sellingAmmount={sellingAmmount}
        setSellingAmmount={setSellingAmmount}
      />
      <Statistics products={products} />
    </div>
  );
}

export default Product;
