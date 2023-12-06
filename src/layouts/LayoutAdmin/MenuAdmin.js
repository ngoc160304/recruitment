import {
    DashboardOutlined,
    TeamOutlined,
    RiseOutlined,
    FileSearchOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
const MenuAdmin = () => {
    const menuItem = [
        {
            key: "/admin",
            label: <NavLink to="/admin">Tổng quan</NavLink>,
            icon: <DashboardOutlined />
        },
        {
            key: "/info-company",
            label: <NavLink to="/info-company">Thông tin công ty</NavLink>,
            icon: <TeamOutlined />
        },
        {
            key: "/job-manage",
            label: <NavLink to="/job-manage">Quản lí việc làm</NavLink>,
            icon: <RiseOutlined />
        },
        {
            key: "/cv-manage",
            label: <NavLink to="/cv-manage">CV</NavLink>,
            icon: <FileSearchOutlined />
        }
    ]
    return (
        <>
            <Menu 
                theme='light'
                items={menuItem}
                defaultSelectedKeys={[window.location.pathname]}
                className='menu-admin'
            />
        </>

    )
}
export default MenuAdmin;