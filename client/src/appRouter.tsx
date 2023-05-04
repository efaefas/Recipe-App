import { BrowserRouter, Routes, Route } from "react-router-dom";

// import component
import { URLEnum } from "./RouterEnum";
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Users from './pages/Users';
import Centers from './pages/Centers';
import Transports from './pages/Transports';
import Food from './pages/Food';
import MainLayout from "./components/MainLayout";

export const routes =
<BrowserRouter>
    <Routes>
        <Route path = {URLEnum.BASE} element={<Home/>}/>
        {/* <Route path = {URLEnum.LOGIN} element={<Login/>}/> */}
        <Route path = {URLEnum.HOME} element={ <MainLayout component={<Home />} /> } />
        <Route path = {URLEnum.DASHBOARD} element={ <MainLayout component={<Dashboard />} /> } />
        <Route path = {URLEnum.SETTINGS} element={ <MainLayout component={<Settings />} /> } />
        <Route path = {URLEnum.PROFILE} element={ <MainLayout component={<Profile />} /> } />
        <Route path = {URLEnum.USERS} element={ <MainLayout component={<Users />} /> } />
        <Route path = {URLEnum.CENTERS} element={ <MainLayout component={<Centers />} /> } />
        <Route path = {URLEnum.TRANSPORTS} element={ <MainLayout component={<Transports />} /> } />
        <Route path = {URLEnum.FOOD} element={ <MainLayout component={<Food />} /> } />
        <Route path= '*' element={<ErrorPage/>} />
    </Routes>
</BrowserRouter>