// import React, { useState, useMemo } from 'react';
// import { NavLink } from 'react-router-dom';
// import NavBar from '../components/Navbar/NavBar';
// import Footer from '../components/Footer';
// import PRODUCT_CATEGORIES from '../data/productsListData';


// const AllProducts = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeTab, setActiveTab] = useState("All");

//   // Flatten categories for tabs, but exclude "Applications" if you want only food items
//   const categories = useMemo(() => ["All", ...PRODUCT_CATEGORIES.map(c => c.title)], []);

//   // Filter Logic: Search (Case Insensitive) + Category Filter
//   const filteredData = useMemo(() => {
//     return PRODUCT_CATEGORIES.map(category => {
//       // If a tab is selected (other than "All"), hide non-matching categories
//       if (activeTab !== "All" && category.title !== activeTab) {
//         return { ...category, items: [] };
//       }

//       const filteredItems = category.items.filter(item =>
//         item.label.toLowerCase().includes(searchTerm.toLowerCase())
//       );

//       return { ...category, items: filteredItems };
//     }).filter(category => category.items.length > 0); // Hide empty categories
//   }, [searchTerm, activeTab]);

//   return (
//     <>
//       <NavBar />
//       <div className="bg-gray-50 min-h-screen pt-24 pb-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           {/* Header & Search Section */}
//           <div className="text-center mb-12">
//             <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
//               Our Ingredient Portfolio
//             </h1>
//             <p className="text-gray-600 max-w-2xl mx-auto mb-8">
//               Explore our full range of premium freeze-dried fruits, vegetables, and custom blends designed for global food brands.
//             </p>

//             {/* Search Bar */}
//             <div className="relative max-w-xl mx-auto">
//               <input
//                 type="text"
//                 placeholder="Search ingredients (e.g. Mango, Onion, Powder)..."
//                 className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </div>
//           </div>

//           {/* Category Tabs */}
//           <div className="flex flex-wrap justify-center gap-2 mb-12">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveTab(cat)}
//                 className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
//                   activeTab === cat 
//                   ? "bg-[#013289] text-white shadow-lg" 
//                   : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* Product Grid */}
//           <div className="space-y-16">
//             {filteredData.length > 0 ? (
//               filteredData.map((category) => (
//                 <div key={category.title} data-aos="fade-up">
//                   <div className="flex items-center gap-4 mb-8">
//                     <h2 className="text-xl font-bold text-orange-600 uppercase tracking-widest">
//                       {category.title}
//                     </h2>
//                     <div className="h-[1px] bg-gray-200 flex-grow"></div>
//                   </div>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {category.items.map((item) => (
//                       <NavLink
//                         key={item.slug}
//                         to={`/products/${item.slug}-powder`}
//                         className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all p-4 flex flex-col items-center text-center"
//                       >
//                         {/* Placeholder for Product Image */}
//                         <div className="w-full aspect-square bg-gray-50 rounded-xl mb-4 overflow-hidden flex items-center justify-center">
//                           {/* You can map your images here. Using a placeholder for now. */}
//                           <div className="text-gray-300 group-hover:scale-110 transition-transform duration-500">
//                              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M12 2L1 21h22L12 2zm0 3.45L18.6 19H5.4L12 5.45z"/>
//                              </svg>
//                           </div>
//                         </div>
                        
//                         <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
//                           {item.label}
//                         </h3>
//                         <p className="text-xs text-gray-400 mt-1 uppercase tracking-tighter">
//                           Freeze-Dried Premium
//                         </p>
                        
//                         <span className="mt-4 text-sm font-bold text-orange-600 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
//                           View Specs <span className="ml-1">→</span>
//                         </span>
//                       </NavLink>
//                     ))}
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="text-center py-20">
//                 <p className="text-gray-400 text-lg italic">No ingredients match your search criteria.</p>
//                 <button onClick={() => {setSearchTerm(""); setActiveTab("All")}} className="text-orange-600 font-bold mt-2">Clear all filters</button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default AllProducts;

import React, { useState, useMemo } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import PRODUCT_CATEGORIES from '../data/productsListData'; // Your list of names/categories
import productsData from '../data1/index.js'; // Your 40+ rich data objects

const AllProducts = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("All");
    const navigate = useNavigate();

    // 1. Merge the two data sources
    // We iterate through the official Categories list and find the matching 'Rich Data' (images, etc)
    const enrichedData = useMemo(() => {
        return PRODUCT_CATEGORIES.map(category => {
            const itemsWithImages = category.items.map(item => {
                // Find matching product in the detailed products array
                // We check if the slug matches directly or with '-powder' suffix
                const richInfo = productsData.find(p => 
                    p.slug === item.slug || 
                    p.slug === `${item.slug}-powder` ||
                    p.slug.replace('-powder', '') === item.slug
                );

                return {
                    ...item,
                    image: richInfo?.images?.gallery?.[0] || null,
                    fullName: richInfo?.name || item.label,
                    // Store the actual rich slug for the link
                    finalSlug: richInfo?.slug || item.slug 
                };
            });

            return {
                ...category,
                items: itemsWithImages
            };
        });
    }, []);

    // 2. Extract Category Titles for Tabs
    const tabList = useMemo(() => ["All", ...enrichedData.map(c => c.title)], [enrichedData]);

    // 3. Filter Logic (Search + Category Tab)
    const filteredCategories = useMemo(() => {
        return enrichedData.map(category => {
            // Filter categories based on Tab
            if (activeTab !== "All" && category.title !== activeTab) {
                return { ...category, items: [] };
            }

            // Filter items within category based on Search
            const searchMatches = category.items.filter(item =>
                item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.fullName.toLowerCase().includes(searchTerm.toLowerCase())
            );

            return { ...category, items: searchMatches };
        }).filter(cat => cat.items.length > 0); // Only show categories that have items
    }, [searchTerm, activeTab, enrichedData]);

    return (
        <>
            <NavBar />
            <div className="bg-gray-50 min-h-screen pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Back Button */}
                    <button 
                        onClick={() => navigate(-1)}
                        className="flex items-center text-orange-600 font-bold hover:text-orange-600 transition-colors mb-8 group"
                    >
                        <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                    </button>

                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-3xl font-serif font-bold text-orange-600 mb-4 uppercase tracking-tight">
                            Global Ingredient Portfolio
                        </h1>
                        
                        {/* Search Bar */}
                        <div className="relative max-w-xl mx-auto mt-8">
                            <input
                                type="text"
                                placeholder="Search by name (e.g. Mango, Jackfruit, Onion)..."
                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-16">
                        {tabList.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                                    activeTab === tab 
                                    ? "bg-orange-400 text-white shadow-lg" 
                                    : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Product Sections */}
                    <div className="space-y-20">
                        {filteredCategories.length > 0 ? (
                            filteredCategories.map((cat) => (
                                <div key={cat.title} data-aos="fade-up">
                                    <div className="flex items-center gap-4 mb-10">
                                        <h2 className="text-lg font-bold text-orange-600 uppercase tracking-[0.2em]">
                                            {cat.title}
                                        </h2>
                                        <div className="h-[1px] bg-gray-200 flex-grow"></div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                        {cat.items.map((item) => (
                                            <NavLink
                                                key={item.slug}
                                                to={`/products/${item.finalSlug}`}
                                                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full"
                                            >
                                                {/* Image Container */}
                                                <div className="w-full aspect-square bg-white p-6 flex items-center justify-center overflow-hidden">
                                                    {item.image ? (
                                                        <img 
                                                            src={item.image} 
                                                            alt={item.label}
                                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                    ) : (
                                                        <div className="flex flex-col items-center text-gray-300">
                                                            <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                            </svg>
                                                            <span className="text-[10px] font-bold">Photo Pending</span>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Text Content */}
                                                <div className="p-6 pt-0 text-center flex flex-col flex-grow">
                                                    <h3 className="text-md font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                                                        {item.label}
                                                    </h3>
                                                    <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-widest font-bold">
                                                        {cat.title.includes('Fruit') ? '100% Fruit' : 'Pure Ingredient'}
                                                    </p>
                                                    <div className="mt-auto pt-6">
                                                        <span className="text-xs font-bold text-orange-600 border-b border-[#013289] group-hover:text-orange-600 group-hover:border-orange-600 transition-all">
                                                            Detailed Specs →
                                                        </span>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                                <p className="text-gray-400 text-lg">No ingredients found matching your search.</p>
                                <button 
                                    onClick={() => {setSearchTerm(""); setActiveTab("All")}} 
                                    className="text-orange-600 font-bold mt-2 hover:underline"
                                >
                                    View All Products
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AllProducts;