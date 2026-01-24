import { Routes, Route} from 'react-router'
import { HomePage } from './Pages/HomePage.jsx'
import { CheckoutPage } from './Pages/checkout/Checkout.jsx'
import { OrderPage } from './Pages/OrderPage.jsx'
import { TrackingPage } from './Pages/TrackingPage.jsx'
import { Header } from './components/Header.jsx'
import './App.css'

function ErrorNotFound() {
  return (
    <>
      <Header />
      <div className="not-found">
        Page not found
      </div>
    </>
  );
}

function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="checkout" element={<CheckoutPage />}></Route>
        <Route path="orders" element={<OrderPage />}></Route>
        <Route path="tracking" element={<TrackingPage />}></Route>
        <Route path="*" element={<ErrorNotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
