import React, { useState } from "react";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import { data } from "./data/data";

function App() {
  const [jobs, setJobs] = useState(data);
  const [filterTags, setfilterTags] = useState([]);

  const filterByStack = ({ role, level, languages, tools, position }) => {
    const stacks = [role, level, ...languages, ...tools, position];
    if (filterTags === 0) {
      return true;
    }
    return filterTags.every((filterTag) => stacks.includes(filterTag));
  };

  const handleStackClick = (filterTag) => {
    if (!filterTags.includes(filterTag))
      setfilterTags((prevState) => [...prevState, filterTag]);
  };
  const filteredJobs = jobs.filter(filterByStack);

  const handleFilterClick = (filterTag) => {
    const filtered = filterTags.filter((item) => item !== filterTag);
    setfilterTags(filtered);
  };
  const handleClear = () => {
    setfilterTags([]);
  };

  return (
    <div className=" min-h-[100vh] bg-light-grayish-cyan">
      <Header
        filterTags={filterTags}
        handleFilterClick={handleFilterClick}
        handleClear={handleClear}
      />
      <Jobs filteredJobs={filteredJobs} filter={handleStackClick} />
    </div>
  );
}

export default App;
