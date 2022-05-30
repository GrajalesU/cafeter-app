import { Route, Routes } from 'react-router-dom';
import Products from './Components/Products/index.js';
import Header from './Components/Header/index.js';
import ProductForm from './Components/ProductForm/index.js';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/add" element={<ProductForm />} />
        <Route path="/edit/:id" element={<ProductForm isEditing />} />
        <Route path="*" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
