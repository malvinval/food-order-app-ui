import Navbar from "../components/ui/Navbar";
import store from "../store";

const Cart = () => {
    const element = (
        <div id="container" className="">
            <Navbar position="top" />
            <div className='flex justify-center'>
                    <div id="body-content-container" className="w-full lg:w-1/2 flex flex-col mt-24 lg:mt-28">
                        <div className="w-full flex flex-wrap justify-center lg:justify-between lg:mx-0 mb-20">
                            {
                                store.getState().length > 0 ? store.getState().map((s, index) => {
                                    return (
                                        <div key={index} className="card font-garamond static card-compact w-72 bg-base-100 shadow-xl mx-2 lg:mx-0 my-5">
                                            
                                            <div id="menu-card-body" className="card-body">
                                                <h2 className="card-title">{s.menuName}</h2>
                                                <p className="text-lg">{s.menuDesc}</p>
                                                <p className="text-lg">Quantity: <span className="font-bold">{s.menuQty}</span></p>
                                                <p className="text-lg">Total: <span className="font-bold">${s.menuPrice}</span></p>
                                                <div className="flex card-actions justify-end">
                                                    <button id="add-to-cart-btn" className="btn btn-accent text-white">
                                                        Checkout
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) :
                                <h1 className="text-2xl text-red-500 font-bold font-garamond">Cart is empty.</h1>
                            }
                        </div>
                    </div>
                </div>
            <Navbar position="bottom" route="/cart" />
        </div>
    );

    return element;
}

export default Cart;