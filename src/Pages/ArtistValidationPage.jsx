import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ValidationPage = () => {
    const { id } = useParams();
    console.log(id);

    async function validator() {
        await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/artist/${id}/validate`, {
            method: 'PATCH',
            headers: {}
        })
    }
    
    useEffect(() => {
        validator()
    }, [])


    return (
        <>
            <div>
                La tua mail è stata confermata, verrai reindirizzato a breve alla pagina di Log In
            </div>
        </>
    )
}

export default ValidationPage