import React, { useEffect, useState } from 'react';
import { SEARCH_API, SEARCH_API2 } from '../Utils/Constants';
import FoodItem from './FoodItem';
import { useDispatch, useSelector } from 'react-redux';
import{addData} from "../Utils/searchSlice"


const Search = () => {
  const [searchData, setSearchData] = useState([]);
  const [query, setQuery] = useState('');
  const [count, setCount] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch()
  const searchDataSlice = useSelector(store => store.search)

  useEffect(() => {


    const foundItem = searchDataSlice.find((item) => {
      return item.query == query
    })

    if(foundItem)
    {
      console.log(foundItem)
      setSearchData(foundItem.data)
      return 
    }


    const getData = async () => {

      const data = await fetch(SEARCH_API + query + SEARCH_API2);
      const json = await data.json();
      setSearchData(json.data.cards[1].groupedCard.cardGroupMap.DISH.cards.slice(1));
      // console.log(json.data.cards[1].groupedCard.cardGroupMap.DISH.cards.slice(1));
      
      dispatch(addData({query: query , data : json.data.cards[1].groupedCard.cardGroupMap.DISH.cards.slice(1)}))
    };

    getData();
  }, [count]);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          placeholder="What are you craving for?"
        />
        <button
          onClick={() => {
            setSearchData([])
            setCount(count + 1);
            setShowLoader(true);
          }}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-r-full hover:bg-blue-600 transition-all"
        >
          🔍
        </button>
      </div>

      <div>
        {searchData.length ? (
          searchData.map((item) => (
            <FoodItem key={item.card.card.info.id} data={item.card.card.info} />
          ))
        ) : (
          showLoader && <Loader />
        )}
      </div>
    </div>
  );
};

export default Search;

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid border-opacity-75"></div>
    </div>
  );
};
