import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaFilter } from 'react-icons/fa'
import Filter from './Filter'
import { useQuery } from '@apollo/client'
// import client side queries
import { loadPlayers } from '../GraphQL/Queries'

function usePlayersFilters() {
  const [filters, _updateFilter] = useState({
    id: undefined,
    fullname: undefined,
    status: undefined,
    returned_day: undefined,
    nationality: undefined,
  })

  const updateFilter = (filterType, value) => {
    _updateFilter({
      [filterType]: value,
    })
  }

  return {
    models: { filters },
    operations: { updateFilter },
  }
}

const Search = ({ info }) => {
  const { operations, models } = usePlayersFilters()

  const { data } = useQuery(loadPlayers)
  const [val, setVal] = useState('')

  const search = (load) => {
    // return load.filter((item) => val.some((keys) => item[key].toLowerCase().includes(data)))
    // operations.updateFilter('fullname', e.target.value)

  }
  return (
    <>
      <div className="w-full flex justify-center items-center ">
        <div className="flex-wrap my-8 w-1/2">
          <div className="flex  ">
            <input
              onChange={(e) => setVal(e.target.value)}
              type="string"
              className="pl-2 border border-cyan-500/50 rounded-md text-black p-4 w-full"
              placeholder="Enter to Search Nationality, Fullname, Available"
            />
            <div
            //  onClick={search}
            className="ml-3 p-4 flex text-gray-100 bg-cyan-500 rounded-md cursor-pointer items-center">
              <FaSearch size="30px" />
            </div>

          </div>
        </div>
      </div>
      

      <div className="w-full  ">
        <div className="text-center text-2xl font-bold">
          Filter by <span className="underline">{info}</span>
        </div>
        <div className="px-8 my-6 flex justify-around">
          <Link to="/available">
            <Filter
              icon={<FaFilter size="20px" />}
              text="Fit to play"
              color="#06b6d4"
            />
          </Link>

          <Link to="/">
            <Filter
              icon={<FaFilter size="20px" />}
              text="All Players"
              color="#06b6d4"
            />
          </Link>

          <Link to="/unavailable">
            <Filter
              icon={<FaFilter size="20px" />}
              text="Injured"
              color="#06b6d4"
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Search
