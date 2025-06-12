import React from "react";

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                       
                         <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">About
                         <span className="text-blue-600"> Us</span>
                         </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>

                        <p className="text-xl text-left pt-10 text-gray-600 max-w-6xl mx-auto">
                            Concept Electrical Trading Est. is one of the largest importers and distributors of electrical
                            materials in the Kingdom of Saudi Arabia. Since its formation in 2009, CET has continuously
                            dominated the market as the Most High Sales Performance Awardees from major world leading
                            manufacturers and suppliers with complete range in electrical materials. After it earned
                            successful business growing awards continuously, CET expanded towards the field of
                            communications, instrumentation and lighting. For over three decades, the activities of CET are
                            tailored to meet the individual need of clients. With the support and expertise of its strong
                            sales team which provides professionally high quality services to various clients throughout the
                            kingdom. CET’s strategically spread network Showrooms, Warehouses, and Projects / Wholesale
                            Offices throughout the Kingdom of Saudi Arabia is providing effective support to client’s
                            specific requirements covering a wide range of products. CET’s parallel itself with convergence
                            of technology and computer science that offers opportunity and a change to gain competitive
                            advantages over other business by exploiting the Information Technology know-how. IT knowledge
                            simplifies its day to day transactions from our Head Office to our kingdom wide warehouses down
                            to projects / wholesale offices and showrooms throughout our on-line connectivity that enable us
                            to serve our clients more effectively. Our Head Office comprising of qualified staff and
                            professional engineers support our customers by proposing and recommending technically
                            acceptable approved materials conforming fully to project specifications at most competitive
                            prices. Our valued customers are furnished with complete technical details, catalogue and
                            material certificates for onward submission to end users, proponents and consultant for review
                            and approval.{" "}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div>
                </div>
            </div>
        </section>
    );
};

export default About;
