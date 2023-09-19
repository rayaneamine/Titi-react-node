
import { Route, Routes } from "react-router-dom";
import Template from './components/templates'
import Home from './pages/pageHome'



function App(){
    return(
      <>
        <Routes>
          <Route path="/" element={<Template />}>
            <Route index element={<Home />}/>
            {/* <Route path="/burger" element={<Burger />}/>
            <Route path="/accompagnement" element={<Accompagnement />}/>
            <Route path="/boisson" element={<Boisson />}/>
            <Route path="/dessert" element={<Dessert />}/>
             */}
          </Route>
          {/* <Route path="/admin/boisson" element={<DashboardBoisson/>}/> */}
        </Routes>
      </>
    );
}

export default App;