import React, { useState } from 'react';
import AddPost from './components/AddPost';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import GetPosts from './components/GetPosts';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:4000');
//client setup

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

function App() {
  const [loading] = useState(false);
  return (
    <ApolloProvider client={client}>
      <div id='main'>
        <h1>
          Blogs To Read
          {loading && (
            <span style={{ fontSize: 'medium', float: 'left' }}>
              Loading...
            </span>
          )}
        </h1>
        <GetPosts socket={socket} />
        <AddPost socket={socket} />
      </div>
    </ApolloProvider>
  );
}

export default App;
