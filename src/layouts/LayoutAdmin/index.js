import { Button, Layout } from "antd";
import "./LayoutAdmin.scss";
import {
    MenuFoldOutlined,
    HomeOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import MenuAdmin from "./MenuAdmin";
import ButtonLogout from "../../components/ButtonLogout";
// import Logo from "../../components/Logo";
import logo from "../../images/logo.png"
const {  Sider, Content } = Layout;
const LayoutAdmin = () => {
    const [ collapsed, setCollapsed ] = useState(false);
    return (
        <>
            <Layout>
               
                <header className="header-admin">
                    <div className="header-admin__nav-left">
                        <div className={collapsed ? "header-admin__logo-fold" : "header-admin__logo"}>
                            <img src={logo} alt="logo"/>
                            {
                                collapsed ? (
                                    null
                                ) : (
                                    <span>CUBETECH</span>
                                )
                            }
                        </div>
                        <div  onClick={() => { setCollapsed(!collapsed)}}>
                            {
                                collapsed ? (
                                    <MenuUnfoldOutlined />
                                ) : (
                                    <MenuFoldOutlined />
                                )
                            }
                        </div>
                    </div>
                    <div className="header-admin__nav-right">
                        <NavLink to="/">
                            <Button
                                icon={<HomeOutlined />}
                            >
                                Trang trủ
                            </Button>
                        </NavLink>
                        <ButtonLogout />
                    </div>
                </header>
                <Layout>
                    <Sider collapsed={collapsed} theme="light">
                        <MenuAdmin />
                    </Sider>
                    <Content>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}
export default LayoutAdmin;