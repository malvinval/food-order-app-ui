import Navbar from "../components/ui/Navbar";

const Bookmarks = () => {
    const element = (
        <div id="container" className="">
            <Navbar position="top" />
                <div className='flex justify-center'>
                    <div id="body-content-container" className="items-center lg:items-end w-full lg:w-1/2 flex flex-col mt-24 lg:mt-28">
                        <p>Page is not ready. Come back again later :3</p>
                    </div>
                </div>
            <Navbar position="bottom" route="/bookmarks" />
        </div>
    );

    return element;
}

export default Bookmarks;