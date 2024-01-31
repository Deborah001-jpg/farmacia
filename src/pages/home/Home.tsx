

function Home() {

    return (
        <>
            <div id="container" className='bg-white flex justify-center'>

                <div id="subcontainer" className='container grid grid-cols-2 text-blue-400 '>

                    <div id="texto" className=">
                        flex
                        flex-col
                        gap-4
                        items-center
                        justify-center
                        font-family
                        py-4">
                        <h2 className=" 
                        text-5xl
                        font-bold
                        "> FarmaMAIS </h2>
                        <p className='p'>"Farmácia e cuidado"</p>


                        <div className="flex justify-around gap-4">
                    
                            
                                <button className='<div className="inline-block text-white font-bold py-2 px-4
                             rounded-full bg-gradient-to-r from-green-500
                              to-purple-800 border border-transparent transform hover:scale-110
                              hover:border-cyan-500 transition-transform duration-3000 ease-in-out">
                                Descubra'>Ver produtos</button>


                            
                        </div>
                    </div>


                    <div id="imagem" className="flex justify-items-center">
                        <img
                            src="src/assets/img/Insurance-rafiki.png"
                            alt="Imagem da pagina Home"
                            className="w-10/12"


                        />
                    </div>
                </div>
            </div>
            

        </>

    )
}

export default Home;