import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'

// import client side queries
import { loadPlayers } from '../GraphQL/Queries'

// components
import Search from '../components/Search'
import Columns from '../components/Columns'

function AllPlayers() {
  const { data } = useQuery(loadPlayers)

  const [user, setUser] = useState([])
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (data) {
      setUser(data.getAllPlayers)
      console.log('okays')
    }
  }, [data])

  return (
    <>
       <Search info="All Players"/>

      {show &&
        user.map((res) => {
          return (
            <>
              <Columns
                key={res.id}
                date={res.id}
                fullname={res.fullname}
                country={res.nationality}
                status={res.status}
              />
            </>
          )
        })}
    </>
  )
}

export default AllPlayers
