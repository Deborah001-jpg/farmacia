
import { Link } from 'react-router-dom'



function Navbar() {

 

  return (
    <>
      <div className='w-full bg-violet-900 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Inicio</Link>

          <div className='flex gap-4'>
            <Link to='/categoria' className='hover:underline'>Categoria</Link>
            <Link to='/produto' className='hover:underline'>Produtos</Link>
            <Link to='/cadastrarProduto' className='hover:underline'>Cadastrar produtos</Link>
           
            

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
