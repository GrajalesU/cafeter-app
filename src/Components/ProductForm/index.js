import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ProductForm({ isEditing }) {
  const [product, setProduct] = useState({
    name: '',
    ref: '',
    price: '',
    weight: '',
    category: '',
    stock: '',
    creation_date: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(id);
    if (isEditing) {
      fetch(`http://localhost:3001/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct({ id, ...data });
        });
    }
  }, [isEditing, id]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const currentProduct = { id: parseInt(id, 10), ...product };
      fetch(`http://localhost:3001/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentProduct),
      }).then(() => {
        navigate('/');
      }).catch((error) => console.log(error));
    } else {
      fetch('http://localhost:3001/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      }).then(() => {
        navigate('/');
      }).catch((error) => console.log(error));
    }
  };

  return (
    <div className="container mx-auto px-4 align-middle w-1/2 content-center ">
      <h1 className="font-bold text-center text-4xl text-amber-900 mb-5">
        {isEditing ? 'EDITAR' : 'AGREGAR'}
        {' '}
        PRODUCTO
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="rounded border-b border-amber-700 p-3 ">
          <h1 className="block text-lg font-bold text-amber-800"> Nombre </h1>
          <input type="text" name="name" className=" flex-1 block w-full  border-b border-amber-700" value={product.name} onChange={handleChange} />
        </div>
        <div className="rounded border-b border-amber-700 p-3 ">
          <h1 className="block text-lg font-bold text-amber-800"> Referencia </h1>
          <input type="text" className=" flex-1 block w-full  border-b border-amber-700" name="ref" value={product.ref} onChange={handleChange} />
        </div>
        <div className="rounded border-b border-amber-700 p-3 ">
          <h1 className="block text-lg font-bold text-amber-800"> Precio </h1>
          <input type="number" className=" flex-1 block w-full  border-b border-amber-700" name="price" value={product.price} onChange={handleChange} />
        </div>
        <div className="rounded border-b border-amber-700 p-3 ">
          <h1 className="block text-lg font-bold text-amber-800"> Peso </h1>
          <input type="number" className=" flex-1 block w-full  border-b border-amber-700" name="weight" value={product.weight} onChange={handleChange} />
        </div>
        <div className="rounded border-b border-amber-700 p-3 ">
          <h1 className="block text-lg font-bold text-amber-800"> Categoría </h1>
          <input type="text" className=" flex-1 block w-full  border-b border-amber-700" name="category" value={product.category} onChange={handleChange} />
        </div>
        <div className="rounded border-b border-amber-700 p-3 ">
          <h1 className="block text-lg font-bold text-amber-800"> Cantidad de unidades </h1>
          <input type="number" className=" flex-1 block w-full  border-b border-amber-700" name="stock" value={product.stock} onChange={handleChange} />
        </div>
        <button
          type="submit"
          className="w-full mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-l font-medium rounded-md text-white bg-amber-800 hover:bg-amber-900 focus:outline-none "
        >
          {isEditing ? 'EDITAR' : 'AGREGAR'}

        </button>
        <button
          onClick={() => navigate('/')}
          type="button"
          className="w-full mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-l font-medium rounded-md text-white bg-amber-800 hover:bg-amber-900 focus:outline-none "
        >
          VOLVER
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
