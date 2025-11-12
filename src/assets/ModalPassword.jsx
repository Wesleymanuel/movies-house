import { Stepper,  Button, Group, PasswordInput } from '@mantine/core'
import { TextInput} from '@mantine/core'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ModalPassword = ({form,handleSubmit}) => {

    const [active, setActive] = useState(0);
    const navigate = useNavigate()


    const nextStep = () => {
        setActive((current) => (current < 3 ? current + 1 : current))
    };
    const prevStep = () => {
        setActive((current) => (current > 0 ? current - 1 : current))
    };

    const valuesConfirm = () => {
        const validation = form.validate();

        console.log(validation)
        if (validation.hasErrors) {
            return;
        }
        nextStep()

        if(active == 3){
          navigate('/')
        }

    }

  return (
    <div className='all'>
                 <Stepper className='stepper' active={active} onStepClick={setActive}>
                    <Stepper.Step label="First step" description="verificar email">
                    </Stepper.Step>
                    <Stepper.Step label="Second step" description="criar nova senha">
                    </Stepper.Step>
                    <Stepper.Step label="Final step" description="senha atualizada">
                    </Stepper.Step>
                    <Stepper.Completed>
                    </Stepper.Completed>
                </Stepper>
    
            <form className='passoword-forms' onSubmit={form.onSubmit(handleSubmit)}>
                 {active == 0 ? (                
                    <div className='input-cont div'>
                        <TextInput style={{width : "100%"}}
                        label='mail'
                        {...form.getInputProps("email")}
                        />
                        <TextInput style={{width : "100%" , marginTop: "25px"}}
                        label="Confirme o email"
                        {...form.getInputProps("confirmEmail")}
                        />
                    </div>
                ) 
                : active == 1 ?
                (
                    <div className='input-cont div'>
                        <PasswordInput style={{width : "100%"}}
                        label='Nova Senha'
                        {...form.getInputProps("senha")}
                        />
                        <PasswordInput style={{width : "100%" , marginTop: "25px"}}
                        label="Confirme a Senha"
                        {...form.getInputProps("senhaConfirmacao")}
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
                        <Button variant="default" onClick={prevStep}>Passo Anterior</Button>
                        <Button type='submit' onClick={valuesConfirm}>Proximo Passo</Button>
                    </Group>
                </div>
            </form>
            </div>
  )
}

export default ModalPassword