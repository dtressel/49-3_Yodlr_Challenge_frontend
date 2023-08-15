import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import './Layout.css';

const Layout = () => {
  return (
    <>
        <NavBar />
        <Container component="main" maxWidth="lg">
          <Outlet />
        </Container>
        <Footer />
    </>
  )
}

export default Layout;
