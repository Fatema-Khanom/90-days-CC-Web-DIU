import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Spinner from "../Components/Spinner/Spinner";



const MainLayOut = () => {
    const navigation = useNavigation()
    const isoLoadingData = navigation.state === "loading";
    console.log(isoLoadingData);
    return (
        <div>
            
            <section className="flex justify-between px-10 shadow-md py-7">
            <div>

                <h1 className="text-xl font-bold">Amazon</h1>
            </div>
                <nav>
                    <ul className="flex gap-5">
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/dashboard">Dashboard</a></li>
                    </ul>
                </nav>
        </section>
        { navigation.state === 'loading'? (
        <Spinner></Spinner>
        ) : (
        <div className="my-10 min-h-screen">
          <Outlet></Outlet>
        </div>
      )}
       <Footer></Footer>


    </div>
    );
};

export default MainLayOut;