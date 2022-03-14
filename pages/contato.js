import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Contato = () => {
    return(
        <div>
            <PageTitle Title='Contato' />
            <h1 className='text-center px-12 py-4 font-bold text-xl'>Converse com a gente no WhatsApp</h1>
            <div className='text-center px-12 py-4'>
            <button className='text-center bg-green-600 px-12 py-4 rounded-lg shadow-lg hover:shadow'>
                <a className='text-white' href="https://web.whatsapp.com/send?phone=5511900000000" title="Compartilhe no WhatsApp">INICIAR CONVERSA</a>
            </button>
            </div>            
        </div>
    )
}

export default Contato