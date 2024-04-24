import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import Result from '../components/Result';

function Home() {
  const [repositories, setRepositories] = useState([]);

  return (
    <>
      <Form setRepositories={setRepositories}/>
      { repositories.length > 0 ? <Result repositories={repositories}/> : <div></div> }
    </>
  )
}

export default Home
