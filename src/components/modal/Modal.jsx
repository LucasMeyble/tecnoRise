import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../state/modal/slice';
import Card from './card';

const Modal = () => {
  const dispatch = useDispatch();
  const { DataRepositorySelected } = useSelector((store) => store.repository);

  return (
    <aside className='fixed top-0 left-0 w-full h-full bg-slate-900/[.80] z-10 flex items-center justify-center'>
      <div className='bg-gradient-to-r from-slate-200 to-slate-300 w-[80vw] max-w-[800px] py-2 px-1 text-center rounded'>
        <div className='flex justify-between flex-row '>
          <div className='text-black pl-3 text-2xl break-all'> 
            <p className='uppercase font-bold'>{DataRepositorySelected.name}</p>
          </div>
          <button className='text-black pr-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:text-gray-600 hover:text-xl hover:scale-110 duration-300' onClick={() => dispatch(closeModal())}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className='my-9 text-white grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-0'>
          <Card 
            title='Usuário' 
            text={DataRepositorySelected.owner.login}
          />
          <Card 
            title='Estatísticas de commits' 
            text={DataRepositorySelected.defaultBranchRef?.target?.history?.totalCount || 'N/A'}
          />
          <Card 
            title='Issues abertas' 
            text={DataRepositorySelected.issues.totalCount}
          />
          <Card 
            title='Pull requests' 
            text={DataRepositorySelected.pullRequests.totalCount}
          />
          <Card 
            title='Descrição' 
            text={DataRepositorySelected.description || 'Não contem descrição'}
          />
        </div>
      </div>
    </aside>
  );
};
export default Modal;
