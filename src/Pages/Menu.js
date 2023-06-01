import { useState } from "react";
import Navbar from "../components/ui/Navbar";
import FoodIMG from "../components/ui/img/food2.png";
import MenuList from "../data/menu.json";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import "../index.css";

const Menu = () => {
    const MenuListArr = MenuList.data.menu;
    const [filteredMenu, setFilteredMenu] = useState(MenuListArr[0])

    console.log(filteredMenu)

    const element = (
        <div id="container" className="">
            <Navbar position="top" />
                <div className='flex justify-center'>
                    <div id="body-content-container" className="items-center lg:items-end w-full lg:w-1/2 flex flex-col mt-24 lg:mt-28">
                        <select onChange={(e) => setFilteredMenu(MenuListArr[e.target.value])} className="select select-bordered w-full max-w-xs font-garamond uppercase">
                            <option value={0}>Pick a category</option>
                            {
                                MenuListArr.map((m, index) => {
                                    return <option value={index}>{m.title}</option>
                                })
                            }
                        </select>
                        
                        <div className="w-full flex flex-wrap justify-center lg:justify-between lg:mx-0 mb-20">
                            {
                                filteredMenu.Dishes.map((d) => {
                                    return (
                                        <div className="card font-garamond static card-compact w-72 bg-base-100 shadow-xl mx-2 lg:mx-0 my-5">
                                            <figure><img src={FoodIMG} alt="menu" /></figure>
                                            <div id="menu-card-body" className="card-body">
                                                <h2 className="card-title">{d.name}</h2>
                                                <p className="text-lg">{d.description}</p>
                                                <div className="card-actions justify-end">
                                                    <button id="add-to-cart-btn" className="btn btn-accent text-white">
                                                        <div className="text-lg flex items-center"><AiOutlineShoppingCart className="mr-2" /> ${d.price}</div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            <Navbar position="bottom" route="/menu" />
        </div>
    );

    return element;
}

export default Menu;