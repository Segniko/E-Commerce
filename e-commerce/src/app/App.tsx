import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Products'; // Adjust the import path as necessary
import ProductDetail from './ProductDetail'; // Create this component if it doesn't exist
import Layout from './layout'; // Your layout component

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/products" element={<Products />} /> {/* Products listing */}
                    <Route path="/products/:id" element={<ProductDetail />} /> {/* Product detail page */}
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
