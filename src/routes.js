import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/navbar'
import Home from './views/Home'
import Award from './views/Award'
import AboutUs from './views/AboutUs'
import Cases from './views/Cases'

function RoutesComponent() {
    return (
        <Routes>
            {/* <Route path='/' element={<Award />} /> */}
            <Route path='/' element={<ResponsiveAppBar />} >
                <Route path="" element={<Home />} />
                <Route path='aboutus' element={<AboutUs />} />
                <Route path='cases' element={<Cases />} />
            </Route>
            {/* <Route
                path='/'
                element={<NavBar />}
            >
                <Route
                    exact
                    path=''
                    element={<Home />}
                />
                <Route
                    exact
                    path='products'
                    element={<ProductsPage />}
                />
                <Route
                    exact
                    path='contato'
                    element={<Contato />}
                />
                <Route
                    exact
                    path="login"
                    element={<Login />}
                />
                <Route
                    exact
                    path='cadastro'
                    element={<Cadastro />}
                />
                <Route
                    exact
                    path='product/:productId'
                    element={<SingleProductPage />}
                />
                <Route
                    exact
                    path='/rememberpasswd'
                    element={<RememberPasswd />}
                />
                <Route
                    path='/newpasswd/'
                    element={<NewPasswd />}
                />
                <Route
                    path='/basket'
                    element={<BasketPage />}
                />
                <Route
                    exact
                    path='files'
                    element={<Files/>}
                />
                <Route
                    exact
                    path='requests'
                    element={<AllRequests/>}
                />

                <Route
                exact
                path='admin/login'
                element={<LoginAdmin />}
            />
                <Route
                     path='/teste/'
                     element={<Teste />}
                />
            </Route>
            <Route
                path='/admin'
                element={<NavBarAdmin />}
            >
                <Route
                    exact
                    path='home'
                    element={<AdminHome />} 
                />
                <Route
                    exact
                    path='clientes'
                    element={<Clients />}
                />
                <Route
                    exact
                    path='financeiro'
                    element={<Financeiro />}
                />
            </Route>
            <Route exact path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} /> */}
        </Routes>

    );

}

export default RoutesComponent;