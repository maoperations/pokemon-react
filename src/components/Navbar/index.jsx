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
    <div className='max-w-md mx-auto'>
      <nav className='flex justify-center space-x-1 bg-white shadow-lg'>
        {link.map((title, index) => (
          <a
            href={title[1]}
            key={index}
            className='after:text-red-500 font-bold p-4 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'
          >
            {title[0]}
          </a>
        ))}
      </nav>
    </div>
  )
}
export default Navbar
