const Navbar = () => {
  const link = [
    ['I', '/gen-i'],
    ['II', '/geb-ii'],
    ['III', '/gen-iii'],
    ['IV', '/gen-iv'],
    ['V', '/gen-v'],
    ['VI', '/gen-vi'],
    ['VII', '/gen-vii'],
    ['VIII', '/gen-viii']
  ]
  return (
    <div className='blok'>
      <h1 className='text-2xl text-purple-800 text-center font-bold mb-5'>
        Select Generation
      </h1>
      <div className='table m-auto'>
        <nav className='flex justify-center bg-white rounded-lg shadow-lg'>
          {link.map((title, index) => (
            <a
              href={title[1]}
              key={index}
              className='flex-wrap text-lg font-bold p-4 rounded-lg hover:bg-slate-100'
            >
              {title[0]}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
export default Navbar
