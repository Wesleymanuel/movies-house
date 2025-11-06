import { Stepper,  Button, Group, PasswordInput } from '@mantine/core'
import { TextInput} from '@mantine/core'
import { useState } from 'react';

const ModalPassword = () => {

    const [active, setActive] = useState(1);


    const nextStep = () => {
        setActive((current) => (current < 3 ? current + 1 : current))
    };
    const prevStep = () => {
        setActive((current) => (current > 0 ? current - 1 : current))
    };

  return (
    <div className='all'>
                 <Stepper active={active} onStepClick={setActive}>
                    <Stepper.Step label="First step" description="verificar email">
                    </Stepper.Step>
                    <Stepper.Step label="Second step" description="criar nova senha">
                    </Stepper.Step>
                    <Stepper.Step label="Final step" description="senha atualizada">
                    </Stepper.Step>
                    <Stepper.Completed>
                    </Stepper.Completed>
                </Stepper>
    
            <form className='passoword-forms'>
                 {active == 1 || active == 0 ? (                
                    <div className='input-cont div'>
                        <TextInput style={{width : "100%"}}
                        label='Email'
                        />
                        <TextInput style={{width : "100%" , marginTop: "25px"}}
                        label="Confirme o email"
                        />
                    </div>
                ) 
                : active == 2 ?
                (
                    <div className='input-cont div'>
                        <PasswordInput style={{width : "100%"}}
                        label='Nova Senha'
                        />
                        <PasswordInput style={{width : "100%" , marginTop: "25px"}}
                        label="Confirme a Senha"
                        />
                    </div>
                ) 
                :
                (
                    <div>
                        <h1>Senha Renovada</h1>
                    </div>
                )}

                <div className='button-cont div'>
                    <Group justify="center" mt="xl">
                        <Button variant="default" type='submit' onClick={prevStep}>Passo Anterior</Button>
                        <Button onClick={nextStep}>Proximo Passo</Button>
                    </Group>
                </div>
            </form>
            </div>
  )
}

export default ModalPassword