// components
import {Header} from './Header.jsx'
import {MenuHorizontalScroll} from './MenuHorizontalScroll.jsx';
// react router
import { Outlet } from "react-router-dom";

export const MainLayOut = () => {
    return (
        <div>
            <Header/>
            <MenuHorizontalScroll/>
            <Outlet />
        </div>
    )
}
