const Card = ({ id }) => {
  let arr = [
    {
      name: 'Noteworthy technology acquisitions 2021',
      description:
        'Here are the biggest enterprise technology acquisitions of 2021 so    far, in reverse chronological order.'
    },
    {
      name: 'Noteworthy technology acquisitions 2022',
      description:
        'Here are the biggest enterprise technology acquisitions of 2021 so    far, in reverse chronological order.'
    },
    {
      name: 'Noteworthy technology acquisitions 2023',
      description:
        'Here are the biggest enterprise technology acquisitions of 2021 so    far, in reverse chronological order.'
    }
  ]
  return (
    <div className='flex gap-5 m-12 justify-center pointer-events-auto'>
      {arr.map((i, index) => (
        <a
          key={index}
          className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
        >
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {i.name}
          </h5>
          <p className='font-normal text-gray-700 dark:text-gray-400'>
            {i.description}
          </p>
        </a>
      ))}
    </div>
  )
}
export default Card
