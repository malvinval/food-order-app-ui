import '../index.css';
import Navbar from "../components/ui/Navbar";
import FoodIMG from "../components/ui/img/food2.png";
import CookingIMG from "../components/ui/img/cooking.jpg";

const App = () => {
  const element = (
    <div id="container" className="">
      <Navbar position="top" />
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
              <h1 className="font-garamond font-weight-800 text-4xl lg:text-6xl text-center">Why Neetfood?</h1>
            </div>

            <div id="second-body-text-container" className="w-3/4 lg:w-full my-5">
              <p className="font-garamond text-lg text-center lg:text-justify leading-7">
              Our restaurant offers a professional dining experience with expert chefs at the helm. Prepare to be captivated by the meticulous attention to detail and unwavering dedication to their craft that our chefs bring to every plate. With a wealth of experience and a deep understanding of flavor profiles, they skillfully blend ingredients, and create harmonious culinary compositions that will leave you craving for more.
              </p>
            </div>
          </div>
        </div>

        <div id="third-body-content" className="mb-14 lg:mb-32 w-full flex flex-col-reverse lg:flex-row mt-14 justify-center">
          <div className="w-full mt-10 lg:mt-0 h-full flex flex-col items-center lg:items-end justify-center">
            <div id="first-body-title-container" className="w-3/4 lg:w-full">
              <h1 className="font-garamond font-weight-800 text-4xl lg:text-6xl text-center lg:text-justify">We are open!</h1>
            </div>

            <div id="first-body-text-container" className="w-3/4 lg:w-full my-8">
              <p className="font-garamond text-lg text-center lg:text-justify leading-7">
                Neetfood is located in South Jakarta, Indonesia. Working hours for weekdays are <strong>09.00 to 22.00</strong>, while for weekends <strong>09.00 to 19.00</strong>. See you at Netfood!
              </p>
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center lg:justify-end">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29225.97464768894!2d106.7619106850658!3d-6.189024430448973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f716e3eecd51%3A0xd946d87a48641634!2sLayar%20Seafood%20%26%20Ikan%20Bakar!5e0!3m2!1sid!2sid!4v1684938532731!5m2!1sid!2sid" className='w-full h-full lg:w-17/20' style={{"border" : "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='neetfoof-loc'></iframe>
          </div>
        </div>
      </div>
      </div>
      <Navbar position="bottom" />
    </div>
  );

  return element;
}

export default App;
