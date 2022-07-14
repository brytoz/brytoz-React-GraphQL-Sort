import { gql } from '@apollo/client'

// DEFINE AND EXPORT THE CLIENT-SIDE QUERY TO FETCH ALL PLAYERS
export const loadPlayers = gql`
  query {
    getAllPlayers {
      id
      fullname
      status
      returned_day
      nationality
    }
  }
`

// DEFINE AND EXPORT THE CLIENT-SIDE QUERY TO FETCH ALL UNAVAILABLE PLAYERS
export const availablePlayers = gql`
  query {
    available {
      id
      fullname
      status
      returned_day
      nationality
    }
  }
`
// DEFINE AND EXPORT THE CLIENT-SIDE QUERY TO FETCH ALL AVAILABLE PLAYERS
export const unAvailablePlayers = gql`
  query {
    unAvailable {
      id
      fullname
      status
      returned_day
      nationality
    }
  }
`


// query to search players
export const searchPlayers = gql`
query getPlay($query: String) {
  getAllPlayers(query: $query) {
    id
    fullname
    returned_day
    nationality
    status
  }
}
`
