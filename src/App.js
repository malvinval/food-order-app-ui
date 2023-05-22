import './index.css';
import Navbar from "./components/ui/Navbar";
import FoodIMG from "./components/ui/img/food2.png";
import CookingIMG from "./components/ui/img/cooking.jpg";

const App = () => {
  const element = (
    <div id="container" className="">
      <Navbar />
      <div className='flex justify-center'>
      <div id="body-content-container" className="w-full lg:w-1/2 flex flex-col items-center mt-24 lg:mt-28">
        <div id="first-body-content" className="w-full flex flex-col-reverse lg:flex-row justify-center">
          <div className="w-full  h-full flex flex-col items-center lg:items-end justify-center">
            <div id="first-body-title-container" className="w-3/4 lg:w-full">
              <h1 className="font-garamond font-weight-800 text-4xl lg:text-6xl text-center lg:text-justify">It's not just food, it's an experience.</h1>
            </div>

            <div id="first-body-text-container" className="w-3/4 lg:w-full my-8">
              <p className="font-garamond text-lg text-center lg:text-justify leading-7">
                Satisfy your cravings with our delectable menu options. From mouth-watering appetizers to scrumptious main courses and delightful desserts, we have something for every taste bud. Our dedicated team of chefs ensures that each dish is prepared with the finest ingredients and utmost care.
              </p>
            </div>

            <div id="first-body-btn-container" className="flex justify-center lg:justify-start w-3/4 lg:w-full">
              <button id="view-menu-btn" className="btn btn-accent mx-1 text-white font-garamond">View menu</button>
              <button id="book-table-btn" className="btn btn-secondary mx-1 font-garamond">Book a Table</button>
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center lg:justify-end">
            <img src={FoodIMG} alt="food img" id='food-img' />
          </div>
        </div>

        <div id="second-body-content" className="w-full flex flex-col lg:flex-row justify-center mt-14 lg:mt-14">
          <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
            <img src={CookingIMG} id='cooking-img' alt="food img" className=' rounded-none lg:rounded-xl' />
          </div>
          <div className="mt-10 lg:mt-0 w-full lg:w-1/2 h-full flex flex-col items-center lg:items-start justify-center lg:pl-8">
            <div id="second-body-title-container" className="w-3/4 lg:w-full">
              <h1 className="font-garamond font-weight-800 text-4xl lg:text-6xl text-center lg:text-left">Why Neetfood?</h1>
            </div>

            <div id="second-body-text-container" className="w-3/4 lg:w-full my-5">
              <p className="font-garamond text-lg text-center lg:text-justify leading-7">
              Our restaurant offers a professional dining experience with expert chefs at the helm. Prepare to be captivated by the meticulous attention to detail and unwavering dedication to their craft that our chefs bring to every plate. With a wealth of experience and a deep understanding of flavor profiles, they skillfully blend ingredients, and create harmonious culinary compositions that will leave you craving for more.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );

  return element;
}

export default App;
