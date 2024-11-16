import NavBar from "./custom-components/navbar/Navbar";
import Footer from "./custom-components/footer/Footer";

const Layout = ({children}) => {
    return(
        <div>
            <div className="h-[80px] fixed top-0 w-full z-50">
          <NavBar />
        </div>
        <main className="pt-[80px] min-h-[calc(100vh-72px)]">{children}</main>
        <Footer />
        </div>
    )
};
export default Layout;