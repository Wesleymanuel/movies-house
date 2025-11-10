import { MdOutlineCameraIndoor } from 'react-icons/md'
import { LuCirclePlus } from 'react-icons/lu';
import { Link } from 'react-router-dom'
import './InitialPage.css'
import { PasswordInput, Button } from '@mantine/core';
import { TextInput } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';
import axios from 'axios';




const InitialPage = () => {

  const navigate = useNavigate()

  const form = useForm({
  initialValues : {
    email : '',
    senha : ''
  },
  validate : {
    email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    senha: (value) => value.length < 6 ? "senha muito curta" : null,
  }
})

const loginUser = async (values) => {
  try{
    const payload = {
      email : values.email,
      senha : values.senha
    }
    const res = await axios.post('http://localhost:3000/login', payload)
    localStorage.setItem("token" , res.data.token)
    localStorage.setItem("id", res.data.user_id)
    console.log(res.data.user_id)
    navigate('/home')
  }catch(error){
    console.log(error)
  }
}




  return (
    <main className='main'>
        <nav className='nav-home'>
          <div className='content'>
            <div className='logo-conteiner'>
              <div><MdOutlineCameraIndoor className='logo'/></div>
              <h1 style={{color : "yellow"}}>movies-house</h1>
            </div>
             <form className='inputs-home' onSubmit={form.onSubmit(loginUser)}>
                <div>
                  <TextInput 
                    className='input email'
                    label="Email"
                    placeholder="xxxxxx@gmail.com"
                    {...form.getInputProps('email')}
                  />
                </div>

                <div>
                  <PasswordInput
                    className='input senha'
                    label="Senha"
                    placeholder="senha"
                    {...form.getInputProps('senha')}
                  />
                </div>

                <div>
                  <Button type='submit' onClick={loginUser} className='bot'style={{background : 'yellow', color: "black"}} >
                    botao
                  </Button>
                </div>

                <div className='div-button'>
                  <Link className='nav-link' to={'/recuperacao'}>
                    <LuCirclePlus style={{ fontSize: "25px", color: "white" }}/>
                    <p>Esqueceu sua senha?</p>
                  </Link>
                </div>

                <div className='div-button'>
                  <Link className='nav-link' to={'/login'}>
                    <LuCirclePlus style={{ fontSize: "25px", color: "white" }}/>
                    <p>Não tem conta?</p>
                  </Link>
                </div>
              </form>

            </div>
        </nav>
    </main>
  )
}

export default InitialPage