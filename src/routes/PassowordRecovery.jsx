import { useState } from 'react'
import { IoPersonCircleSharp } from "react-icons/io5"
import './Passoword.css'
import { instance } from '../axios/Axios'
import { useForm } from '@mantine/form'
import ModalPassword from '../assets/ModalPassword'

const PassowordRecovery = () => {

    const form = useForm({
        initialValues : {
            email : '',
            confirmEmail: '',
            senha: "",
            senhaConfirmacao : ""

        },
        validate : {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            confirmEmail: (value, values) => {
                if (!/^\S+@\S+$/.test(value)) {
                    return 'Invalid email';
                }
                if (value !== values.email) {
                    return 'Emails do not match';
                }
                return null;
                },
                senha: (value) => value.length < 6 ? "senha muito curta" : null,
                senhaConfirmacao : (value,values) =>  {
                    if(value !== values.senha){
                        return "senhas diferentes"
                    }
                    return null;
                }
        }
    })

    const formSubmit = async (values) => {
        try{
            await instance.post('atualizacao', values)
        }
        catch(error){
            console.log(error)
        }
    }


  return (
    <div className='passoword-conteiner'>
        <ModalPassword form={form} values={form.values} handleSubmit={formSubmit}/>
    </div>
  )
}

export default PassowordRecovery
