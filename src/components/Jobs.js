import React from "react";

const Jobs = ({ filteredJobs, filter }) => {
  return filteredJobs.map((item) => {
    const {
      id,
      company,
      logo,
      isNew,
      featured,
      position,
      role,
      level,
      postedAt,
      contract,
      location,
      languages,
      tools,
    } = item;

    const stacks = [role, level, ...languages, ...tools];

    return (
      <div
        key={id}
        className={` flex justify-between items-center flex-col md:flex-row w-10/12 md:w-11/12 relative mx-auto mb-5 shadow-lg shadow-dark-grayish-cyan drop-shadow-sm  mt-20 bg-white rounded py-5 ${
          isNew && `border-l-4 border-dark-grayish-cyan`
        }  `}
      >
        <div className="flex items-center">
          <img
            src={logo}
            className=" inline-block ml-3 mr-0 md:mr-6 w-16 h-16 absolute -top-6 left-2  md:relative md:top-0 lg:w-20 lg:h-20"
            alt="jgdjfd"
          />
          <div className="  block lg:inline-block mt-6 md:mt-0 -ml-4 lg:ml-0">
            <p className=" inline-block text-dark-grayish-cyan   font-bold">
              {company}
              {isNew && (
                <span className=" rounded-lg bg-dark-grayish-cyan text-white px-2 py-1 ml-2  text-center mx-auto">
                  New!
                </span>
              )}
              {featured && (
                <span className=" rounded-lg bg-gray-700 text-white ml-2 py-1 px-2">
                  Featured
                </span>
              )}
            </p>
            <p
              className=" font-bold hover:cursor-pointer hover:text-dark-grayish-cyan mt-1 text-lg"
              onClick={() => filter(position)}
            >
              {position}
            </p>
            <ul className=" w-64 list-disc flex justify-between items-center">
              <li className=" list-none text-gray-400 font-bold">{postedAt}</li>
              <li className=" text-gray-400 font-bold">{contract}</li>
              <li className=" text-gray-400 font-bold">{location}</li>
            </ul>
          </div>
        </div>
        <div className=" border-t w-[95%] md:hidden my-2 "></div>

        <div className=" flex ml-6 md:justify-end mt-3 justify-start items-center gap-3 mr-3 flex-wrap ">
          {stacks.map((item, index) => {
            return (
              <span
                key={index}
                className=" text-dark-grayish-cyan bg-light-grayish-cyan font-bold px-3 py-1 rounded-md cursor-pointer hover:bg-dark-grayish-cyan hover:text-light-grayish-cyan"
                onClick={() => filter(item)}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    );
  });
};

export default Jobs;
