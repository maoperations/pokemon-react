const Card = () => {
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
    <div className='container my-12 mx-auto px-4 md:px-12'>
      <div className='flex flex-wrap -mx-1 lg:-mx-4'>
        {arr.map((item, index) => (
          <div
            key={index}
            className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'
          >
            <article className='overflow-hidden rounded-lg shadow-lg'>
              <a href='#'>
                <img
                  alt='Placeholder'
                  className='block h-auto w-full'
                  src='https://picsum.photos/600/400/?random'
                />
              </a>

              <header className='flex items-center justify-between leading-tight p-2 md:p-4'>
                <h1 className='text-lg'>
                  <a
                    className='no-underline hover:underline text-black'
                    href='#'
                  >
                    {item.name}
                  </a>
                </h1>
                <p className='text-grey-darker text-sm'>{item.description}</p>
              </header>
            </article>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Card
