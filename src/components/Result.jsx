import { useDispatch } from 'react-redux';
import { openModal } from '../state/modal/slice';
import { selectDataRepository } from '../state/repository/slice';

function Result ({ repositories }) {

  const dispatch = useDispatch();
  return (
    <div>
      <ul 
        className='mt-6 flex justify-center items-center flex-col bg-slate-950 w-5/5 m-auto mx-5 p-9 rounded-xl space-y-5 lg:min-w-[600px] xl:min-w-[1000px]'
      >
        <li 
          className='bg-slate-900 min-w-full p-3 rounded-xl flex justify-between items-center space-x-2'
        >
          <a 
            className='text-indigo-500 font-medium w-1/3 text-ellipsis overflow-hidden' 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Nome Repositorio
          </a>
          <p 
            className="text-ellipsis overflow-hidden w-1/3 flex justify-center"
          >
            Autor
          </p>
          <p className='w-1/3 flex justify-center'>Ações</p>
        </li>
        <hr />
        {repositories.map(
          (repo, index) => (
            <li 
              key={index} 
              className='bg-slate-900 min-w-full p-3 rounded-xl flex justify-center items-center space-x-2 max-w-full'
            >
              <a 
                className='text-indigo-500 font-medium w-1/3 text-ellipsis overflow-hidden' 
                href={repo.node.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {repo.node.name} 
              </a>
              <p className="text-ellipsis overflow-hidden w-1/3 flex justify-center">{repo.node.owner.login}</p>
              <button 
                className="w-1/3 flex flex-row-reverse" 
                onClick={
                  () => {
                    dispatch(openModal()); 
                    dispatch(selectDataRepository(repo.node))
                  }
                }
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor" 
                  className="w-6 h-6"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" 
                  />
                </svg>
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default Result