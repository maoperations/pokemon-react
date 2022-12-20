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
    <div class='container my-12 mx-auto px-4 md:px-12'>
      <div class='flex flex-wrap -mx-1 lg:-mx-4'>
        {arr.map((item, index) => (
          <div class='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'>
            <article class='overflow-hidden rounded-lg shadow-lg'>
              <a href='#'>
                <img
                  alt='Placeholder'
                  class='block h-auto w-full'
                  src='https://picsum.photos/600/400/?random'
                />
              </a>

              <header class='flex items-center justify-between leading-tight p-2 md:p-4'>
                <h1 class='text-lg'>
                  <a class='no-underline hover:underline text-black' href='#'>
                    Article Title
                  </a>
                </h1>
                <p class='text-grey-darker text-sm'>11/1/19</p>
              </header>
            </article>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Card
