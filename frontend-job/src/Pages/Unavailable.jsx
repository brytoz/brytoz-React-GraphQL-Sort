import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'

// import client side queries
import { unAvailablePlayers } from '../GraphQL/Queries'

// components
import Search from '../components/Search'
import Columns from '../components/Columns'
import Loading from '../components/Loading'


function Unavailable() {
  const { data } = useQuery(unAvailablePlayers)

  const [user, setUser] = useState([])
  const [show, setShow] = useState(true)


  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 900)
  }, [])
  useEffect(() => {
    if (data) {
      setUser(data.unAvailable)
    }
  }, [data])

  return (
    <>
    {loading ? (
      <Loading />
    ) : (
      <>
        <Search info="Unavailable" />
        {show &&
          user.map((res) => {
            return (
              <>
                <Columns
                  key={res.id}
                  date={res.returned_day}
                  fullname={res.fullname}
                  country={res.nationality}
                  status={res.status}
                />
              </>
            )
          })}
      </>
    )}
  </>
  )
}

export default Unavailable
