import { useNavigate } from 'react-router-dom';

function ProductList({
  products, setProducts, isEditing, sellingAmmount, setSellingAmmount,
}) {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => {
        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts);
      });
  };

  const handleSale = (id) => {
    const currentProduct = products.find((product) => product.id === id);
    if (currentProduct.stock < sellingAmmount[id]) {
      alert('No hay suficiente stock');
      setSellingAmmount({ ...sellingAmmount, [id]: 0 });
      return;
    }
    const newProduct = {
      ...currentProduct,
      stock: currentProduct.stock - sellingAmmount[id],
      sale: currentProduct.sale + sellingAmmount[id],
    };
    fetch(`http://localhost:3001/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then(() => {
        const newProducts = products.map((product) => {
          if (product.id === id) {
            return newProduct;
          }
          return product;
        });
        setProducts(newProducts);
        setSellingAmmount({ ...sellingAmmount, [id]: 0 });
      }).catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <table className="mt-8 w-3/4">
        <thead className="border-b-2">
          <tr>
            <th className="">Nombre</th>
            <th className="border-x-2">Peso</th>
            <th className="border-x-2">Precio</th>
            <th className="border-x-2">Stock</th>
            {isEditing ? <th>Edición</th> : <th>Ventas</th>}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="text-lg tracking-wide whitespace-normal ">
              <td className="px-4 pb-2">{product.name}</td>
              <td className="border-x-2 px-4">
                {product.weight}
                {' '}
                Oz
              </td>
              <td className="border-x-2 px-4">
                {product.price}
                {' '}
                $
              </td>
              <td className="border-x-2 px-4">
                {product.stock}
                {' '}
                unidades
              </td>
              <td className="px-4">
                {isEditing ? (
                  <>
                    <button type="button" className="border border-1 rounded-lg px-4 ml-4 hover:bg-amber-800 hover:text-white" onClick={() => { navigate(`/edit/${product.id}`); }}>Editar</button>
                    <button type="button" className="border border-1 rounded-lg px-4 ml-4 hover:bg-amber-800 hover:text-white" onClick={() => handleDelete(product.id)}>Eliminar</button>
                  </>
                ) : (
                  <>
                    <input
                      type="number"
                      className="appearance-none border-b-2 text-center caret-transparent"
                      max={product.stock}
                      min="0"
                      value={sellingAmmount[product.id]}
                      onChange={(e) => {
                        setSellingAmmount({
                          ...sellingAmmount,
                          [product.id]: parseInt(e.target.value, 10),
                        });
                      }}
                    />
                    <button type="button" className="border border-1 rounded-lg px-4 ml-4 hover:bg-amber-800 hover:text-white" onClick={() => handleSale(product.id)}>Vender </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
