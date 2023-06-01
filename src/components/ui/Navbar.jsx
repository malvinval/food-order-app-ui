import '../../index.css';
import { GrHomeRounded } from 'react-icons/gr';
import { BiFoodMenu } from 'react-icons/bi';
import { BsClockHistory } from 'react-icons/bs';
import { BiBookmarkHeart } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = (props) => {
    const element = (
        <div id='navbar' className={`fixed ${props.position === "bottom" ? "bottom-0 rounded-t-3xl justify-center" : "top-0 rounded-b-3xl"} shadow-2xl left-0 right-0 w-full md:w-1/2 navbar bg-white mx-auto font-garamond`}>
            {
                props.position === "bottom" ?
                <div className="px-5 flex w-full justify-between lg:justify-evenly">
                    <div className={`${props.route === "/" ? "border-b-4 rounded-b-sm border-b-pink-400":""} py-2 flex`}>
                        <a href="/" className="rounded-lg lg:px-10 lg:py-2 normal-case text-xl tracking-wide font-weight-800">
                            <GrHomeRounded />
                        </a>
                    </div>
                    <div className={`${props.route === "/menu" ? "border-b-4 rounded-b-sm border-b-pink-400":""} py-2 flex`}>
                        <a href="/menu" className="rounded-lg lg:px-10 lg:py-2 normal-case text-xl tracking-wide font-weight-800">
                            <BiFoodMenu />
                        </a>
                    </div>
                    <div className={`${props.route === "/cart" ? "border-b-4 rounded-b-sm border-b-pink-400":""} py-2 flex`}>
                        <a href="/cart" className="rounded-lg lg:px-10 lg:py-2 normal-case text-xl tracking-wide font-weight-800">
                            <AiOutlineShoppingCart />
                        </a>
                    </div>
                    <div className={`${props.route === "/history" ? "border-b-4 rounded-b-sm border-b-pink-400":""} py-2 flex`}>
                        <a href="/history" className="rounded-lg lg:px-10 lg:py-2 normal-case text-xl tracking-wide font-weight-800">
                            <BsClockHistory />
                        </a>
                    </div>
                    <div className={`${props.route === "/bookmarks" ? "border-b-4 rounded-b-sm border-b-pink-400":""} py-2 flex`}>
                        <a href="/bookmarks" className="rounded-lg lg:px-10 lg:py-2 normal-case text-xl tracking-wide font-weight-800">
                            <BiBookmarkHeart />
                        </a>
                    </div>
                </div>
                :
                <>
                <div className="flex-1 px-5">
                    <a href="#!" className="normal-case text-xl tracking-wide font-weight-800">Neetfood</a>
                </div>
                <div className="flex-none">
                
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img src="https://randomuser.me/api/portraits/med/women/59.jpg" alt="" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                            <a href="#!" className="justify-between">
                                Profile
                            </a>
                            </li>
                            <li><a href="#!">Settings</a></li>
                            <li><a href="#!">Logout</a></li>
                        </ul>
                    </div>
                </div>
                </>
            }
        </div>
    );

    return element;
}

export default Navbar;