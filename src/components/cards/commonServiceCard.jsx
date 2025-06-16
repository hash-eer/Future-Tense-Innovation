import React from "react";
import { Link } from 'react-router-dom';

const CommonServiceCard = ({products, pageName, division, discription, bgImg}) => {
  
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
                    <li>
                      <span className="text-gray-400">/</span>
                    </li>
                    <li>
                      <span className="text-blue-600 font-medium">{pageName}</span>
                    </li>
                  </ol>
                </nav>
              </div>
            </section>

            <section
                className="py-20 relative bg-cover bg-center bg-no-repeat overflow-hidden min-h-screen bg-gray-50"
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundAttachment: "fixed",
                }}
            >
                {/* Background overlay for readability - much lighter */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/30 to-white/40"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2
                              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 hover:text-black"
                              style={{ textShadow: "2px 2px 4px rgba(255,255,255,0.8), 0 0 10px rgba(255,255,255,0.6)" }}
                            >
                                {division}
                                <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                            </h2>
                            <p
                                className="text-lg text-gray-800 max-w-4xl mx-auto leading-relaxed mt-8 font-semibold"
                                style={{ textShadow: "1px 1px 2px rgba(255,255,255,0.8), 0 0 8px rgba(255,255,255,0.5)" }}
                            >
                           {discription}
                            </p>
                        </div>

                        <div className="mb-12">
                            <h3
                                className="text-2xl font-bold text-blue-600 mb-8 hover:text-black"
                                style={{ textShadow: "1px 1px 2px rgba(255,255,255,0.8), 0 0 8px rgba(255,255,255,0.5)" }}
                            >
                                Products & Manufacturers
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                                {products.map((product) => (
                                   
                                    <Link
                                    key={product.id}
                                    to={`/${pageName}/${product.id}`}
                                    className="block"
                                    >
                                    <div className="bg-gray-800/95 hover:bg-gray-700/95 transition-all duration-300 p-6 rounded-lg text-center group cursor-pointer backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 min-h-[220px] flex flex-col items-center justify-between">
                                        <div className="bg-white rounded-lg mb-4 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain"
                                            onError={(e) => {
                                            e.target.style.display = "none";
                                            e.target.nextSibling.style.display = "flex";
                                            }}
                                        />
                                        <div className="w-full h-full bg-gray-100 rounded-md hidden items-center justify-center">
                                            <span className="text-gray-400 text-xs">No Image</span>
                                        </div>
                                        </div>
                                        <h4 className="text-white font-semibold text-sm leading-tight">{product.name}</h4>
                                    </div>
                                    </Link>

                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CommonServiceCard;