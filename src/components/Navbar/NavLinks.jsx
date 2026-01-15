import React from 'react';
import { HashLink } from 'react-router-hash-link';
import ProductsMenu from './ProductsLinks';
const NavLinks = () => {
    return (
        <>
            <HashLink className="
    relative text-[0.9rem] inline-block font-semibold text-black hover:text-orange-600
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-black
    after:transition-all after:duration-300 after:ease-out
    hover:after:w-full
  " smooth to="/#about">
                About
            </HashLink>
          
<div className="hidden lg:inline-block">
  <ProductsMenu />
</div>

        
<HashLink
  to="/products"
  className="
    relative text-[0.9rem]  inline-block font-semibold text-black hover:text-orange-600
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-black
    after:transition-all after:duration-300 after:ease-out
    hover:after:w-full
  "
>
  Application
</HashLink>



            <HashLink className="
    relative text-[0.9rem]  inline-block font-semibold text-black hover:text-orange-600
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-black
    after:transition-all after:duration-300 after:ease-out
    hover:after:w-full
  " to="/blogs">
                Blogs
            </HashLink>
            <HashLink className="
    relative text-[0.9rem]  inline-block font-semibold text-black hover:text-orange-600
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-black
    after:transition-all after:duration-300 after:ease-out
    hover:after:w-full
  " to="/contact#contact">
                Contact Us
            </HashLink>
           
        </>
    )
}

export default NavLinks;
