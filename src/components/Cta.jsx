// import React from 'react';
// import {Link} from 'react-router-dom';
// const Cta = () => {
//     return ( 
//         <div className="w-full flex items-center justify-center text-white cta">
//             <div className="mx-8 w-full h-96 text-center lg:text-left py-16 px-12 flex lg:justify-between items-center">                    
//                 <div className="w-full flex flex-col lg:flex-row lg:justify-around">
//                     <div className="mb-4">
//                         <p className='text-2xl md:text-4xl font-bold mb-4'>Are you ready to scale your business?</p>
//                         <p className="text-lg md:text-2xl">Get in touch and let us build something amazing <span className='font-black'>together!</span></p>
//                     </div>
                    
//                     <div className="w-full lg:w-72 pt-6 lg:mx-12">
//                         <Link to="/contact" className="bg-transparent border hover:bg-blue-900 hover:border-blue-800 text-white justify-center text-center rounded-lg px-10 py-3 flex items-center group">Send a message
//                         <svg className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//      );
// }
 
// export default Cta;
import React from 'react';
import { Link } from 'react-router-dom';

const Cta = () => {
    return ( 
        <div className="w-full flex items-center justify-center bg-white py-12">
            {/* The CTA Card - Using your deep blue and orange scheme */}
            <div className="mx-6 w-full max-w-7xl bg-[#013289] rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl" data-aos="zoom-in">
                
                {/* Decorative background element for texture */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                    
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl md:text-3xl font-serif font-bold text-white mb-6 leading-tight">
                            Ready to Optimize Your <br />
                            <span className="text-orange-400 italic">Product Excellence?</span>
                        </h2>
                        <p className="text-blue-100 text-sm md:text-md max-w-2xl leading-relaxed">
                            Partner with us for premium, nutrient-dense freeze-dried ingredients 
                            engineered for your specific B2B requirements.
                        </p>
                    </div>

                    <div className="flex flex-col text-sm sm:flex-row gap-4 w-full lg:w-auto">
                        <Link 
                            to="/contact" 
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-4 rounded-xl flex items-center justify-center transition-all shadow-lg active:scale-95 group"
                        >
                            Request a Quote
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>

                        <Link 
                            to="/contact" 
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold px-10 py-4 rounded-xl flex items-center justify-center transition-all"
                        >
                            Get Free Samples
                        </Link>
                    </div>
                </div>

                {/* Bottom Stats/Trust bar inside CTA */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center lg:justify-start gap-8 opacity-60">
                    <span className="text-xs font-bold uppercase tracking-widest text-white">✓ Bulk Shipping Global</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-white">✓ Custom Formulations</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-white">✓ 100% Traceability</span>
                </div>
            </div>
        </div>
     );
}
 
export default Cta;