import { Outlet } from "react-router-dom"
import Cabeçalho from "../components/Cabeçalho"
// import Header from "../components/Header"

function DefaultLayout() {

    return (
        <>
        <Cabeçalho />
        <Outlet />
        </>
    )

}

export default DefaultLayout