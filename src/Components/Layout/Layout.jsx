import { Outlet } from "react-router-dom";
import Header from "../header/header";

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;