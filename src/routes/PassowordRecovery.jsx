import { useState } from 'react'
import { TextInput,Button } from '@mantine/core'
import { IoPersonCircleSharp } from "react-icons/io5"
import './Passoword.css'

const PassowordRecovery = () => {

    const [modal, setModal] = useState(true)




  return (
    <div className='passoword-conteiner'>
        {modal ? 
        (<from className='passoword-forms'>
            <div>
                <IoPersonCircleSharp/>
            </div>
            <div>
                <TextInput/>
            </div>
            <div>
                <Button
                    type='submit'
                    style={{ width: "100px", background : "yellow",color: "black" }}
                >
                Enviar
                </Button>
            </div>
        </from>)
         : 
        (<div>

        </div>)}
    </div>
  )
}

export default PassowordRecovery