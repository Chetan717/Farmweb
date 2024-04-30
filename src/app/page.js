import Hero from "./CompUtils/Hero.tsx/Hero";
import PopularProd from "./PopularProd/PopularProd";
import Categoriespro from "./Featuresutils/Categories";
import Offer from "../app/Offer/Offer";
import { ToastContainer, toast } from "react-toastify";
export default function page() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex flex-col justify-center items-center lg:gap-5 gap-5 p-2">
        {/* <Categoriespro /> */}
        {/* <Hero /> */}
        <Offer link={`https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg`} />
        <PopularProd />
        <Offer link={`https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg`} />

      </div>

    </>
  );
}
