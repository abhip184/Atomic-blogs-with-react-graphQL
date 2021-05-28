import React, { useState } from 'react';
import PostDetails from './PostDetails';

const PostList = ({ data, loading, error, socket }) => {
  // const { loading, error, data } = useQuery(getPosts);
  const [SELECTEDID, setSELECTEDID] = useState('');

  if (loading) return <div class='loader'>Loading...</div>;
  if (error) return <p>Error :(</p>;

  const posts =
    data && data.filterPosts.length > 0 ? (
      data.filterPosts.map(({ id, title, content }) => (
        <li
          key={id}
          onClick={(e) => {
            console.log(id);
            setSELECTEDID(id);
          }}
        >
          {title}
        </li>
      ))
    ) : (
      <>
        <p>Posts not found</p>
      </>
    );
  return (
    <>
      <div className='posts'>
        <ul id='post-list'>{posts}</ul>
        <PostDetails
          selected={SELECTEDID}
          setSELECTEDID={setSELECTEDID}
          socket={socket}
        />
      </div>
    </>
  );
};

export default PostList;
