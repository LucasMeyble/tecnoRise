import React, { useState } from 'react';
import { useApi } from '../service/useApi';
import Loading from './loading';

function Form ({ setRepositories }) {

  const [nameRepository, setNameRepository] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const { handleSearch } = useApi();

  const onClickSearch = async (e) => {
    setErrorMessage('')
    setLoading(true)
    e.preventDefault();
    
    if(!nameRepository) {
      setRepositories([])
      setErrorMessage('Você precisa digitar algo para que a pesquisa seja realizada')
      setLoading(false)
      return
    }
    
    try {
      const response = await handleSearch(nameRepository)

      setRepositories(response.data.data.search.edges)
      setErrorMessage('')
      setLoading(false)
    } catch (err) {
      setError(err.message);
    }
  }

  const handleChange = (event) => {
    setNameRepository(event.target.value);
  };

  return (
    <div className='mt-9'>
      <form onSubmit={onClickSearch} className='space-y-6 flex justify-center items-center flex-col'>
        <input 
          value={nameRepository}
          onChange={handleChange}
          placeholder="Digite o nome do repositório"
          className='p-3 w-72 text-lg text-center text-black font-medium rounded-xl'
        />
      
        <div>
          <button 
            type='submit' 
            className='rounded-lg border-2 border-neutral-600 hover:border-indigo-700 py-2 px-4 ' 
            onClick={onClickSearch}>
              Buscar Repositórios
          </button>
        </div>
      {errorMessage && <span className='text-red-600 mt-9'>{errorMessage}</span>}
      {loading && <Loading />}
      </form>
    </div>
  )
}

export default Form