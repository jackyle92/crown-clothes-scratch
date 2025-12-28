import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import App from './App.jsx'
import {UserProvider} from "./contexts/user.context.jsx";
import {CategoriesProvider} from "./contexts/categories.context.jsx";
import './index.scss'
import {CartProvider} from "./contexts/cart.context.jsx";

createRoot(document.getElementById('root')).render(
      <BrowserRouter>
          <UserProvider>
              <CategoriesProvider>
                  <CartProvider>
                      <App />
                  </CartProvider>
              </CategoriesProvider>
          </UserProvider>
      </BrowserRouter>
)
