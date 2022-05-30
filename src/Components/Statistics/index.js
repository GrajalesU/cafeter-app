import { useEffect, useState } from 'react';

function Statistics({ products }) {
  const [maxStock, setMaxStock] = useState(undefined);
  const [maxSelled, setMaxSelled] = useState(undefined);

  useEffect(() => {
    const currentMaxStock = products.reduce((max, product) => {
      if (product.stock > max) {
        return product.stock;
      }
      return max;
    }, 0);
    const productMaxStock = products.find((product) => product.stock === currentMaxStock);
    setMaxStock(productMaxStock);

    const currentMaxSelled = products.reduce(
      (max, product) => {
        if (product.sale > max) {
          return product.sale;
        }
        return max;
      },
      0,
    );
    const productMaxSelled = products.find((product) => product.sale === currentMaxSelled);
    setMaxSelled(productMaxSelled);
  }, [products]);

  return (
    <>
      <h2 className="font-bold text-center text-xl text-amber-900 pt-5">ESTADISTICAS</h2>
      <p className="font-medium text-center cursor-default pt-3">
        {maxStock && (
        <>
          Producto con más stock:
          <b className="font-bold text-amber-800 underline underline-offset-4">
            {' '}
            {maxStock.name}
          </b>
        </>
        )}
      </p>
      <p className="font-medium text-center cursor-default pt-3">
        {maxSelled ? (
          <>
            Producto más vendido:
            {' '}
            <b className="font-bold text-amber-800 underline underline-offset-4">{maxSelled.name}</b>
          </>
        ) : 'Aun no hay ventas'}
      </p>
    </>
  );
}

export default Statistics;
