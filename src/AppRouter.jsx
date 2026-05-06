import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Header} from './components/layout/Header';
import {CartDrawer} from './components/layout/CartDrawer';
import {ProtectedRoute} from './components/layout/ProtectedRouter';
import {LandingView} from './pages/landing/LandingView';
import {LoginView} from './pages/login/LoginView';
import {HomeView} from './pages/home/HomeView';
import {BookDetailView} from './pages/book-detail/BookDetailView';
import {CheckoutView} from './pages/checkout/CheckoutView';
import {ProfileView} from './pages/profile/ProfileView';

export const AppRouter = () => (
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<LandingView/>}/>
            <Route path="/login" element={<LoginView/>}/>
            <Route path="/home" element={<HomeView/>}/>
            <Route path="/book/:id" element={<BookDetailView/>}/>
            <Route path="/checkout" element={<ProtectedRoute><CheckoutView/></ProtectedRoute>}/>
            <Route path="/profile" element={<ProtectedRoute><ProfileView/></ProtectedRoute>}/>
        </Routes>
        <CartDrawer/>
    </Router>
);