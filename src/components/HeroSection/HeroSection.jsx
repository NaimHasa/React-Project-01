
const HeroSection = () => {
    return (
        <main className="hero container ">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="second-btn">Category</button>

                </div>
                <div className="shopping">
                    <p>Also Available On</p>
                </div>
                <div className="barnd-icon">
                    <img src="/images/brand_logo.png" alt="brand-logo" />
                    <img src="/images/flipkart.png" alt="flipkart" />
                </div>

            </div>


            <div className="hero-img">
                <img src="/images/shoe_image.png" alt="" />
            </div>

        </main>
    );
};

export default HeroSection;