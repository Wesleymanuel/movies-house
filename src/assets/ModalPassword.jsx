import { Stepper,  Button, Group } from '@mantine/core'
import { TextInput} from '@mantine/core'
import { useState } from 'react';

const ModalPassword = ({setModal,text}) => {

    const [active, setActive] = useState(1);

    const nextStep = () => {
        setActive((current) => (current < 3 ? current + 1 : current))
        setModal(false)
    };
    const prevStep = () => {
        setActive((current) => (current > 0 ? current - 1 : current))
        setModal(true)
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
                <div className='input-cont div'>
                    <TextInput style={{width : "100%"}}
                    label='Email'
                    />
                    <TextInput style={{width : "100%" , marginTop: "0px"}}
                    label="Confirme o email"
                    />
                </div>
                <div className='button-cont div'>
                    <Group justify="center" mt="xl">
                        <Button variant="default" onClick={prevStep}>Passo Anterior</Button>
                        <Button onClick={nextStep}>Proximo Passo</Button>
                    </Group>
                </div>
            </form>
            </div>
  )
}

export default ModalPassword