import * as React from "react";

import { client } from './GraphQL/conn/conn'
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from '@apollo/client'
import Pages from "./Pages";


function App() {
  return (
    <BrowserRouter >
      <ApolloProvider client={client}>

        <Pages />

      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
