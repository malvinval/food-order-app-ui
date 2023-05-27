import { useState } from "react";
import Navbar from "../components/ui/Navbar";
import MenuList from "../data/menu.json";

const Menu = () => {
    const MenuListArr = MenuList.data.menu;
    const [filteredMenu, setFilteredMenu] = useState(MenuListArr[0])

    console.log(filteredMenu)

    const element = (
        <div id="container" className="">
            <Navbar position="top" />
                <div className='flex justify-center'>
                    <div id="body-content-container" className="w-full lg:w-1/2 flex flex-col mt-24 lg:mt-28">
                        <select onChange={(e) => setFilteredMenu(MenuListArr[e.target.value])} className="select select-bordered w-full max-w-xs font-garamond uppercase">
                            <option value={0}>Pick a category</option>
                            {
                                MenuListArr.map((m, index) => {
                                    return <option value={index}>{m.title}</option>
                                })
                            }
                        </select>

                        {
                            filteredMenu.Dishes.map((d) => {
                                return <p>{d.name}</p>
                            })
                        }
                    </div>
                </div>
            <Navbar position="bottom" />
        </div>
    );

    return element;
}

export default Menu;