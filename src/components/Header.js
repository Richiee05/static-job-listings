import React from "react";
import remove from "../icons/icon-remove.svg";
const Header = ({ filterTags, handleClear, handleFilterClick }) => {
  return (
    <div className="bg-[url('./icons/bg-header-mobile.svg')] md:bg-[url('./icons/bg-header-desktop.svg')] bg-dark-grayish-cyan md:h-24 h-44 relative  mx-auto">
      {filterTags.length === 0 || (
        <article className="flex justify-between items-center absolute -bottom-10 w-11/12 left-[5%] right-[5%] bg-white min-h-fit pb-3 py-2 px-3 rounded">
          <article className="">
            {filterTags.map((item, index) => {
              return (
                <section
                  className="inline-flex justify-between items-center ml-3 gap-2 rounded-md bg-light-grayish-cyan overflow-hidden pl-3  mt-3"
                  key={index}
                >
                  <span className="text-dark-grayish-cyan font-bold">
                    {item}
                  </span>
                  <img
                    className=" object-contain  h-8 w-8 px-2  bg-dark-grayish-cyan hover:cursor-pointer hover:bg-very-dark-grayish-cyan"
                    src={remove}
                    alt=""
                    onClick={() => handleFilterClick(item)}
                  />
                </section>
              );
            })}
          </article>
          <span
            className=" font-bold text-gray-400 hover:cursor-pointer hover:text-very-dark-grayish-cyan"
            onClick={() => handleClear()}
          >
            Clear
          </span>
        </article>
      )}
    </div>
  );
};

export default Header;
