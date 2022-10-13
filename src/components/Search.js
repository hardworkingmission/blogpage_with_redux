import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import searchImg from '../assets/search.svg';
import { search } from '../redux/posts/actions';
import debounce from 'lodash.debounce';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(search(searchText));
  }, [dispatch, searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 300);
  }, []);
  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });
  return (
    <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input
        className="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        placeholder="Search"
        onChange={debouncedResults}
      />
      <img
        className="inline h-6 cursor-pointer"
        src={searchImg}
        alt="Search"
        onClick={() => dispatch(search(searchText))}
      />
    </div>
  );
};

export default Search;
