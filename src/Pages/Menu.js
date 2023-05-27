import Navbar from "../components/ui/Navbar";

const Menu = () => {
    const element = (
        <>
            <Navbar />

            <Navbar position="bottom" />
        </>
    );

    return element;
}

export default Menu;