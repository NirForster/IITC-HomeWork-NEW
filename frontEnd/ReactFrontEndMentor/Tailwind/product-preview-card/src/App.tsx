import cartSvg from "../src/assets/images/icon-cart.svg";

function App() {
  return (
    <div className="min-h-screen w-screen bg-Cream flex justify-center items-center ">
      <div className="rounded-xl bg-white flex flex-col xl:flex-row w-11/12 max-w-2xl ">
        {/* Product Image */}
        <img
          className="rounded-t-xl xl:rounded-l-xl xl:rounded-tr-none xl:w-1/2 xl:hidden"
          src="../src/assets/images/image-product-mobile.jpg"
          alt="Gabrielle Essence Eau De Parfum"
        />
        <img
          className="hidden xl:block rounded-l-xl xl:w-1/2"
          src="../src/assets/images/image-product-desktop.jpg"
          alt="Gabrielle Essence Eau De Parfum"
        />
        {/* Product Details */}
        <div className="font-montserrat self-center text-grayishBlue text-sm m-6 xl:w-1/2 xl:m-8">
          <p className="text-grayishBlue pb-2 tracking-wide xl:pb-6">
            P E R F U M E
          </p>
          <h1 className="font-bold text-3xl pb-4 text-darkBlue font-fraunces xl:text-4xl">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="pb-6 leading-relaxed">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex items-center pb-6">
            <span className="text-darkCyan font-fraunces text-3xl pr-4 xl:text-4xl">
              $149.99
            </span>
            <span className="line-through top-0 right-0 text-grayishBlue text-sm xl:text-base">
              $169.99
            </span>
          </div>
          <button className="mx-auto w-full flex items-center justify-center font-bold bg-darkCyan text-white p-3 rounded-lg hover:bg-green-700 xl:mt-4 xl:mx-0 xl:w-full xl:px-6 xl:py-3">
            <img className="h-auto p-2" src={cartSvg} alt="cart" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
