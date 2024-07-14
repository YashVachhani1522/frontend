import { useRoutes } from 'react-router-dom'
import Authroutes from './Authroutes'
import Header from '../layouts/header/Header'

const Main = () => {
    const routes=useRoutes(
        [{
            path:"/*",
            element:<Authroutes/>
        }]
    )
 return routes 
//  (
    // <>
    //     <Header></Header>
    //     {routes}
    // </>)
}

export default Main