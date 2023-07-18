import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

const DefaultLayout = ({ children }) => {
    return ( 
        <div>
            <Navbar/>
            { children }
            <Footer />
        </div>
     );
}
 
export default DefaultLayout;