import { useState } from 'react'
import { IoPersonCircleSharp } from "react-icons/io5"
import './Passoword.css'
import axios from 'axios'
import { useForm } from '@mantine/form'
import ModalPassword from '../assets/ModalPassword'

const PassowordRecovery = () => {

    const [modal, setModal] = useState(true)


    const form = useForm({
        initialValues : {
            email : '',
            confirmEmail: ''
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
        }
    })


  return (
    <div className='passoword-conteiner'>
        {modal ? 
        (<ModalPassword  setModalodal={setModal}/>)
         : 
        (<ModalPassword text={text}/>)}
        </div>
  )
}

export default PassowordRecovery
