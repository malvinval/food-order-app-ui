import { useState, useEffect } from "react";
import Navbar from "../components/ui/Navbar";
import FoodIMG from "../components/ui/img/food2.png";
import MenuList from "../data/menu.json";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import store from "../store";
import "../index.css";
import { connect } from 'react-redux';
import { addToCart } from "../actions";

const Menu = (props) => {
    const MenuListArr = MenuList.data.menu;
    const [filteredMenu, setFilteredMenu] = useState(MenuListArr[0]);
    const [modalTrigerred, setModalTrigerred] = useState(false);
    const [selectedMenuName, setSelectedMenuName] = useState("");
    const [selectedMenuDesc, setSelectedMenuDesc] = useState("");
    const [selectedMenuConstantPrice, setSelectedMenuConstantPrice] = useState(0);
    const [selectedMenuPrice, setSelectedMenuPrice] = useState("");
    const [selectedMenuQty, setSelectedMenuQty] = useState(1);

    const handleAddToCart = (name, desc, price) => {
        setModalTrigerred(!modalTrigerred);
        setSelectedMenuName(name);
        setSelectedMenuDesc(desc);
        setSelectedMenuPrice(price);
        setSelectedMenuConstantPrice(price);
        setSelectedMenuQty(1);
    }

    
    const handleAddItemToCart = () => {

        store.dispatch(addToCart(selectedMenuName, selectedMenuDesc, selectedMenuQty, selectedMenuPrice));
        setModalTrigerred(false)
    }

    const handleCancelAddToCart = () => {
        setModalTrigerred(false);
    }

    const handleMenuCartQty = (operator) => {
        if (operator === '+') {
            setSelectedMenuQty(selectedMenuQty + 1)
        } else {
            if (selectedMenuQty > 1) {
                setSelectedMenuQty((prevMenuQty) => {return prevMenuQty - 1})
            }
        }
    }

    useEffect(() => {
        setSelectedMenuPrice(selectedMenuConstantPrice * selectedMenuQty)
    }, [selectedMenuQty])
    
    const element = (
        <div id="container" className="">
            <Navbar position="top" />
                <div className='flex justify-center'>
                    <div id="body-content-container" className="items-center lg:items-end w-full lg:w-1/2 flex flex-col mt-24 lg:mt-28">
                        <select onChange={(e) => setFilteredMenu(MenuListArr[e.target.value])} className="select select-bordered w-full max-w-xs font-garamond uppercase">
                            <option value={0}>Pick a category</option>
                            {
                                MenuListArr.map((m, index) => {
                                    return <option key={index} value={index}>{m.title}</option>
                                })
                            }
                        </select>
                        
                        <div className="w-full flex flex-wrap justify-center lg:justify-between lg:mx-0 mb-20">
                            {
                                filteredMenu.Dishes.map((d, index) => {
                                    return (
                                        <div key={index} className="card font-garamond static card-compact w-72 bg-base-100 shadow-xl mx-2 lg:mx-0 my-5">
                                            <figure><img src={FoodIMG} alt="menu" /></figure>
                                            <div id="menu-card-body" className="card-body">
                                                <h2 className="card-title">{d.name}</h2>
                                                <p className="text-lg">{d.description}</p>
                                                <div className="flex card-actions justify-end">
                                                    <button onClick={() => handleAddToCart(d.name, d.description, d.price)} id="add-to-cart-btn" className="btn btn-accent text-white">
                                                        <div className="text-lg flex items-center"><AiOutlineShoppingCart className="mr-2" /> ${d.price}</div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {
                            modalTrigerred ? 
                            <>
                                <div className="font-garamond fixed inset-0 flex items-center justify-center z-50 font-poppins">
                                    <div className="modal-box">
                                        <div className="mt-5">
                                            <div className="mt-3">
                                                <p className="text-lg font-bold uppercase">{selectedMenuName}</p>
                                            </div>

                                            <div className="mt-3">
                                                <label className="text-lg">{selectedMenuDesc}</label>
                                            </div>

                                            <div className="mt-5">
                                                <div className="flex items-center">
                                                    <p className="mr-5 font-bold text-lg">Quantity</p>
                                                    <div onClick={() => handleMenuCartQty('-')} className=" bg-pink-600 text-white p-1 rounded-xl cursor-pointer"><AiOutlineMinus /></div>
                                                    <span className="font-bold mx-10">{selectedMenuQty}</span>
                                                    <div onClick={() => handleMenuCartQty('+')} className="bg-teal-600 text-white p-1 rounded-xl cursor-pointer">
                                                        <AiOutlinePlus />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-5">
                                                <label className="text-lg">Total: <strong>${selectedMenuPrice}</strong></label>
                                            </div>
                                        </div>
                                        <div className="modal-action mt-8">
                                            <label onClick={handleCancelAddToCart} className="btn btn-error text-white">Cancel</label>
                                            <label onClick={handleAddItemToCart} htmlFor="my-modal" className="btn">Add to cart</label>
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            ""
                        }
                    </div>
                </div>
            <Navbar position="bottom" route="/menu" />
        </div>
    );

    return element;
}

export default connect(null, { addToCart })(Menu);
