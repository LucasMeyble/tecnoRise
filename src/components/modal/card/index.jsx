function card({title, text }) {
  return(
    <div 
      className='bg-slate-900 mx-4 lg:mx-4 lg:mb-4 p-4 space-y-1 rounded-md flex justify-center items-start flex-col last:lg:col-span-2'
    >
      <p>{title}</p>
      <span 
        className='font-medium text-lg'
      >
        {text}
      </span>
    </div>
  )
}

export default card