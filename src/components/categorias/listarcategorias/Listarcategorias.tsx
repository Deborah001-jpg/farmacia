import CardCategorias from "../cardcategorias/cardCategorias";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import Categoria from "../../../models/categoria";




function Listarcategorias () {


    const [categorias] = useState<Categoria[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarcategorias () {
        try {
            await buscar('/categorias', setCategorias , {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token Expirou!')
                handleLogout()
            }
        }
    }


    useEffect(() => {
        buscarcategorias()    
    }, [categorias.length])
    
    return (
        <>
        {categorias.length === 0 && (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
           
        />
        )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <>
                        {categorias.map((categoria) =>(
                                <>
                                    <CardCategorias key={categoria.id} categoria={categoria} />
                                </>
                            ))}
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listarcategorias;