import React from 'react';

const SingleBlog = ({params}) => {
  console.log(params.id)
  return <div>single blog page id : {params?.id}</div>;
};

export default SingleBlog;
