import React, { useMemo } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import products from '../data1/index.js'; // Importing your actual product data

const Blogs = () => {
    const navigate = useNavigate();

    // 1. Select specific products to feature as "Technical Insights"
    // We search by slug to find 2 Fruits and 2 Vegetables from your real data
    const featuredInsights = useMemo(() => {
        const selectedSlugs = [
            'freeze-dried-mango-powder', 
            'freeze-dried-onion-white-powder', 
            'freeze-dried-kiwi-powder', 
            'freeze-dried-spinach-powder'
        ];
        
        return products.filter(p => selectedSlugs.includes(p.slug)).map(p => ({
            id: p.slug,
            category: p.category,
            // Creating a professional B2B title using the product name
            title: `Technical Analysis: The Industrial Versatility of ${p.name}`,
            excerpt: p.shortDescription,
            image: p.images?.gallery?.[0],
            date: "Jan 2024",
            readTime: "6 min read"
        }));
    }, []);

    return (
        <>
            <NavBar />
            <div className="bg-white min-h-screen pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    
                    {/* Back Button */}
                    <button 
                        onClick={() => navigate(-1)}
                        className="flex items-center text-gray-800 font-bold hover:text-orange-600 transition-colors mb-8 group"
                    >
                        <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                    </button>

                    {/* Header Section */}
                    <div className="text-center mb-16" data-aos="fade-up">
                        <span className="text-orange-500 font-bold tracking-widest uppercase text-xs">
                            Research & Development
                        </span>
                        <h1 className="mt-4 text-3xl md:text-3xl font-serif font-bold text-gray-800 uppercase tracking-tight">
                            Technical Insights
                        </h1>
                        <div className='flex justify-center mt-4'>
                            <div className='w-24 border-b-4 border-orange-500'></div>
                        </div>
                        <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-md leading-relaxed">
                            A deep dive into the nutritional profiles, industrial applications, and processing standards of our core ingredient portfolio.
                        </p>
                    </div>

                    {/* Blog Grid using REAL PRODUCT DATA */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredInsights.map((post) => (
                            <article 
                                key={post.id} 
                                className="group flex flex-col h-full bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
                                data-aos="fade-up"
                            >
                                {/* Image from Product Data */}
                                <div className="relative h-56 bg-white flex items-center justify-center p-4 overflow-hidden">
                                    {post.image ? (
                                        <img 
                                            src={post.image} 
                                            alt={post.title} 
                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="bg-gray-100 w-full h-full flex items-center justify-center text-gray-300">
                                            [Technical Image Pending]
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-[#013289] text-white text-[9px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest shadow-lg">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content from Product Data */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
                                        <span>{post.date}</span>
                                        <span className="mx-2 text-orange-500">•</span>
                                        <span>{post.readTime}</span>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 leading-tight mb-4 group-hover:text-gray-800 transition-colors">
                                        {post.title}
                                    </h3>

                                    {/* Using shortDescription as excerpt */}
                                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-4 mb-6 italic">
                                        "{post.excerpt}"
                                    </p>

                                    <div className="mt-auto">
                                        <NavLink 
                                            to={`/products/${post.id}`} 
                                            className="inline-flex items-center text-xs font-bold text-orange-600 hover:text-gray-800 transition-colors group/link"
                                        >
                                            VIEW TECHNICAL SPECS
                                            <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </NavLink>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Newsletter CTA */}
                    <div className="mt-20 py-16 px-6 bg-[#013289] rounded-3xl text-center text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Download Our Complete Technical Catalog</h2>
                            <p className="text-blue-200 mb-8 max-w-lg text-sm mx-auto">Get monthly updates on bulk pricing, global crop reports, and new ingredient formulations.</p>
                            <div className="flex flex-col sm:flex-row justify-center text-sm items-center gap-4">
                                <input 
                                    type="email" 
                                    placeholder="Enter Business Email" 
                                    className="w-full sm:w-80 px-6 py-4 rounded-xl bg-white/10 border border-white/20 focus:bg-white focus:text-gray-900 outline-none transition-all placeholder:text-blue-200"
                                />
                                <button className="w-full sm:w-auto px-6 py-4 bg-orange-500 hover:bg-orange-600 font-bold rounded-xl transition-all shadow-lg active:scale-95">
                                    Join Network
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blogs;