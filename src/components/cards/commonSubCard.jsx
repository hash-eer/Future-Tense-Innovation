import { Link } from 'react-router-dom';

const SubPageCard = ({ product, parent, title, bgImg }) => {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container mx-auto px-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              </li>
              <li><span className="text-gray-400">/</span></li>
              <li>
                <Link to={`/${parent}`} className="text-gray-600 hover:text-blue-600">{parent}</Link>
              </li>
              <li><span className="text-gray-400">/</span></li>
              <li>
                <span className="text-blue-600 font-medium">{title}</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main Section */}
      <section
        className="py-20 relative bg-cover bg-center bg-no-repeat min-h-screen"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 hover:text-black"
                style={{ textShadow: "2px 2px 4px rgba(255,255,255,0.8)" }}>
                {title}
                <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
              </h2>
            </div>

            {/* Column Titles (Visible on desktop only) */}
            <div className="hidden md:grid grid-cols-3 text-yellow-700 font-semibold text-center mb-2 px-4">
              <div>Manufacturer</div>
              <div>Description</div>
              <div>Product</div>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-6">
              {product?.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800/95 hover:bg-gray-700/95 transition-all duration-300 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 p-4"
                >
                  {/* Responsive Layout: Mobile → stacked, Desktop → 3-column grid */}
                  <div className="flex flex-col md:grid md:grid-cols-3 md:items-center gap-4 md:gap-0">
                    
                    {/* Manufacturer */}
                    <div className="flex justify-center items-center">
                    <img
                        src={item.manufacturer}
                        alt="Manufacturer"
                        className="w-24 h-20 md:w-32 md:h-24 object-contain max-w-full"
                    />
                    </div>

                    {/* Description */}
                    <div className="text-white text-center text-sm px-4">
                      {item.description}
                    </div>

                    {/* Product Image */}
                    <div className="flex justify-center items-center">
                      <img
                        src={item.productImg}
                        alt="Product"
                        className="object-contain h-12"
                      />
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default SubPageCard;
