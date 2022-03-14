import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
    const [ form, setform ] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Nota: 0
    })

    const Notas = [0,1,2,3,4,5]
    const [ sucess, setSuccess ] = useState(false)
    const [ retorno, setRetorno ] = useState({})
    const save = async () => {
        try{
            const response = await fetch ('api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json() 
            setSuccess(true) 
            setRetorno(data)          
        }catch (error){

        }
    }
    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setform( old => ({
            ...old,
            [key]: value
        }))
    }
    return(
        <div className='pt-6'>  
        <PageTitle Title='Pesquisa' />          
            <h1 className='text-center font-bold my-4 text-2xl'>Críticas e/ou sugestão</h1>
            <p className='text-center mb-6'>
                O restaurante X sempre busca por atender melhor seus clientes.<br/>
                Por isso, estamos sempre abertos a ouvir sua opinião.
            </p>
            {!sucess &&
                <div className='w-48 mx-auto'>
                    <label className='font-bold'>Seu nome:</label>
                    <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.name} />
                    <label className='font-bold'>E-mail:</label>
                    <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
                    <label className='font-bold'>Whatsapp:</label>
                    <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
                    <label className='font-bold'>Nota:</label>
                    <div className='flex py-6'>
                    {Notas.map(nota => {
                        return (
                            <label className='block w-1/6 text-center'>
                                {nota}<br />
                                <input type='radio' name='Nota' value={nota} onChange={onChange} />
                            </label>
                            )
                        })
                    }  
                    </div>
                    <button className='text-center bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>
                </div>
            }
            { sucess &&
                <div className='w-48 mx-auto'>
                    <p className='text-center mb-6 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado pela sua participação!</p>
                    {
                        retorno.showCoupon && 
                            <div className='text-center border p-4 mb-4'>
                                Seu cupom: <br />
                                <span className='font-bold text-2x1'>{retorno.Cupom}</span>
                            </div>
                    } 
                    {
                        retorno.showCoupon && 
                            <div className='text-center border p-4 mb-4'>
                                <span className='font-bold block mb-2'>{retorno.Promo}</span>
                                <br />
                                <span classname='Italic'>Tire um print ou foto desta tela e apresente ao garçom.</span>
                            </div>
                    }                   
                </div>
            }
        </div>        
    )
}

export default Pesquisa