import '../../index.css';
import { GrHomeRounded } from 'react-icons/gr';
import { BiFoodMenu } from 'react-icons/bi';
import { BsClockHistory } from 'react-icons/bs';
import { BiBookmarkHeart } from 'react-icons/bi';

const Navbar = (props) => {
    const element = (
        <div id='navbar' className={`fixed ${props.position === "bottom" ? "bottom-0 rounded-t-3xl justify-center" : "top-0 rounded-b-3xl"} shadow-2xl left-0 right-0 w-full md:w-1/2 navbar bg-white mx-auto font-garamond`}>
            {
                props.position === "bottom" ?
                <div className="px-5 flex w-full justify-between lg:justify-evenly">
                    <a href="/" className="hover:bg-gray-100 rounded-lg lg:px-10 lg:py-2 normal-case text-xl tracking-wide font-weight-800">
                        <GrHomeRounded />
                    </a>
                    <a href="/menu" className="hover:bg-gray-100 rounded-lg lg:px-10 lg:py-2 normal-case text-xl tracking-wide font-weight-800">
                        <BiFoodMenu />
                    </a>
                    <a href="/history" className="hover:bg-gray-100 rounded-lg lg:px-10 lg:py-2 normal-case text-xl tracking-wide font-weight-800">
                        <BsClockHistory />
                    </a>
                    <a href="/bookmarks" className="hover:bg-gray-100 rounded-lg lg:px-10 lg:py-2 normal-case text-xl tracking-wide font-weight-800">
                        <BiBookmarkHeart />
                    </a>
                </div>
                :
                <>
                <div className="flex-1 px-5">
                    <a href="#!" className="normal-case text-xl tracking-wide font-weight-800">Neetfood</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                        <span className="font-bold text-lg">8 Items</span>
                        <span className="text-info">Subtotal: $999</span>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-block">View cart</button>
                        </div>
                        </div>
                    </div>
                    </div>
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
                            <span className="badge">New</span>
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