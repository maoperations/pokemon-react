const Navbar = () => {
  const link = [
    { name: 'I', router: '/gen-i' },
    { name: 'II', router: '/geb-ii' },
    { name: 'III', router: '/gen-iii' },
    { name: 'IV', router: '/gen-iv' },
    { name: 'V', router: '/gen-v' },
    { name: 'VI', router: '/gen-vi' },
    { name: 'VII', router: '/gen-vii' },
    { name: 'VIII', router: '/gen-viii' }
  ]
  return (
    <div className='blok'>
      <h1 className='text-2xl text-purple-800 text-center font-bold mb-5'>
        Select Generation
      </h1>
      <div className='table m-auto'>
        <nav className='flex justify-center bg-white rounded-lg shadow-lg'>
          {link.map((item, index) => (
            <a
              href={item.router}
              key={index}
              className='flex-wrap text-lg font-bold p-4 rounded-lg hover:bg-slate-100'
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
export default Navbar
