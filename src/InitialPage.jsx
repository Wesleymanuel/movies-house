import { MdOutlineCameraIndoor } from 'react-icons/md'
import { LuCirclePlus } from 'react-icons/lu';
import { Link } from 'react-router-dom'
import './InitialPage.css'
import { PasswordInput, Button } from '@mantine/core';
import { TextInput } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const InitialPage = () => {

  const navigate = useNavigate()

  return (
    <main className='main'>
        <nav className='nav-home'>
          <div className='content'>
            <div className='logo-conteiner'>
              <div><MdOutlineCameraIndoor className='logo'/></div>
              <h1 style={{color : "yellow"}}>movies-house</h1>
            </div>
             <div className='inputs-home'>
                <div>
                  <TextInput 
                    className='input email'
                    label="Email"
                    placeholder="xxxxxx@gmail.com"
                  />
                </div>

                <div>
                  <PasswordInput
                    className='input senha'
                    label="Senha"
                    placeholder="senha"
                  />
                </div>

                <div>
                  <Button className='bot'style={{background : 'yellow', color: "black"}} onClick={() => navigate('/home')} >
                    botao
                  </Button>
                </div>

                <div className='div-button'>
                  <Link to={'/login'}>
                    <LuCirclePlus style={{ fontSize: "25px", color: "white" }}/>
                  </Link>
                </div>
              </div>

            </div>
        </nav>
    </main>
  )
}

export default InitialPage