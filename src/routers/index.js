import Home from "../pages/Home";
import Login from "../pages/Login/idex";
import Register from "../pages/Register";
import Search from "../pages/Search";
import PrivateRouter from "../components/PrivateRouter";
import Admin from "../pages/Admin";
import InfoCompany from "../pages/InfoCompany";
import JobManage from "../pages/JobManage";
import CreateJob from "../pages/CreateJob";
import JobDetail from "../pages/JobDetail";
import CvManage from "../pages/CvManage";
import CvDetail from "../pages/CvDetail";
import LayoutClient from "../layouts/LayoutClient";
import LayoutAdmin from "../layouts/LayoutAdmin";
import Error from "../pages/Error";
import CompanyList from "../pages/CompanyList";
import Recruitment from "../pages/Recruitment";
import CompanyDetail from "../pages/CompanyDetail";
const routers = [
    {
        path: "/",
        element: <LayoutClient />,
        children : [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "/search",
                element: <Search />,
                children: [
                    {
                        path: "search?/:result",
                        element: <Search />
                    }
                ]
            },
            {
                path: '/company',
                element: <CompanyList />,
            },
            {
                path: '/company/:id',
                element: <CompanyDetail />
            },
            {
                path: '/job/:id',
                element: <Recruitment />
            },
        ]
    },
    {
        path: "/",
        element: <LayoutAdmin />,
        children : [
            {
                element: <PrivateRouter />,
                children: [
                    {
                        path: "admin",
                        element: <Admin />
                    },
                    {
                        path: "info-company",
                        element: <InfoCompany />
                    },
                    {
                        path: "job-manage",
                        element: <JobManage />
                    },
                    {
                        path: "create-job",
                        element: <CreateJob />
                    },
                    {
                        path: "job-detail/:id",
                        element: <JobDetail />
                    },
                    {
                        path: "cv-manage",
                        element: <CvManage />
                    },
                    {
                        path: "cv-detail/:id",
                        element: <CvDetail />
                    }
                ]
            }
        ]
    },
    {
        path: "*",
        element: <Error />
    }
]
export default routers