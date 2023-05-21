
import './index.css';
import Navbar from "./components/ui/Navbar";
import FoodIMG from "./components/ui/img/food.png"

const App = () => {
  const element = (
    <div id="container" className="">
      <Navbar />
      <div id="body-content-container" className="w-100 flex flex-col mt-32 lg:mt-28">
        <div id="first-body-content" className="w-full h-1/2 flex flex-col-reverse lg:flex-row">
          <div className="w-full mt-8 lg:w-1/2 h-full flex flex-col items-center lg:items-end justify-center">
            <div id="first-body-title-container" className="w-3/4 lg:w-1/2">
              <h1 className="font-garamond font-weight-800 text-4xl lg:text-6xl text-center lg:text-justify">It's not just food, it's an experience.</h1>
            </div>

            <div id="first-body-text-container" className="w-3/4 lg:w-1/2 my-8">
              <p className="font-garamond text-lg text-center lg:text-justify leading-7">
                Satisfy your cravings with our delectable menu options. From mouth-watering appetizers to scrumptious main courses and delightful desserts, we have something for every taste bud. Our dedicated team of chefs ensures that each dish is prepared with the finest ingredients and utmost care.
              </p>
            </div>

            <div id="first-body-btn-container" className="flex justify-center w-3/4 lg:w-1/2">
              <button id="view-menu-btn" className="btn btn-accent mx-1 text-white font-garamond">View menu</button>
              <button id="book-table-btn" className="btn btn-secondary mx-1 font-garamond">Book a Table</button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-full flex items-center justify-center lg:justify-start">
            <img src={FoodIMG} alt="food img" />
          </div>
        </div>
      </div>
    </div>
  );

  return element;
}

export default App;
