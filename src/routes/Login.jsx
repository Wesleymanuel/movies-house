import { useState } from 'react';
import { TextInput, Tooltip, PasswordInput, NativeSelect, Button } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { IMaskInput } from 'react-imask';
import { useForm } from '@mantine/form'
import './Login.css';
import axios from 'axios';


const Login = () => {


    const form = useForm({
        initialValues: {
            email: '',
            nome: "",
            sobrenome: "",
            genero: 'masculino',
            cpf: "",
            pais: '',
            estado: '',
            cidade: "",
            senha: ''
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            senha: (value) => value.length < 6 ? "senha muito curta" : null,
            nome: (value) => value === '' ? "nome incompleto" : null,
            sobrenome: (value) => value === '' ? "nome incompleto" : null,
            pais: (value) => value === '' ? "nome incompleto" : null,
            cidade: (value) => value === '' ? "nome incompleto" : null,
            estado: (value) => value === '' ? "nome incompleto" : null,
            cpf: (value) => value.length === 14 ? null : 'CPF incompleto (use o formato 000.000.000-00)',
            genero : (value) => value === '' ? "genero invalido" : null
        }
    })
    const [focused, setFocused] = useState(false);
    const [focused2, setFocused2] = useState(false);
    const [value, setValue] = useState(null);

    const cadastroUsuario = async (values) => {
        try {
            const payload = {
                nome : values.nome,
                sobrenome : values.sobrenome,
                genero : values.genero,
                cpf : values.cpf,
                pais : values.pais,
                estado : values.estado,
                cidade : values.cidade,
                email : values.email,
                senha : values.senha
            }
            const res = await axios.post('http://localhost:3000/ola', payload )
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="login-conteiner">
            <div className="form-conteiner">
                <form onSubmit={form.onSubmit(cadastroUsuario)} className="form ">
                    <div className='w-[48%]'>
                        <TextInput
                            label="Nome"
                            placeholder="Nome"
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                            {...form.getInputProps('nome')}
                            inputContainer={(children) => (
                                <Tooltip label="Digite o primeiro nome" position="top-start" opened={focused}>
                                    {children}
                                </Tooltip>
                            )}
                        />
                    </div>
                    <div className='w-[48%]'>
                        <TextInput
                            label="Sobrenome"
                            placeholder="Sobrenome"
                            onFocus={() => setFocused2(true)}
                            onBlur={() => setFocused2(false)}
                            {...form.getInputProps('sobrenome')}
                            inputContainer={(children) => (
                                <Tooltip label="Digite o sobre nome" position="top-start" opened={focused2}>
                                    {children}
                                </Tooltip>
                            )}
                        />
                    </div>
                    <div className='w-[30%]'>
                        <DateInput
                            value={value}
                            onChange={setValue}
                            label="Date input"
                            placeholder="Date input"
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className='w-[60%]'>
                        <NativeSelect label="genero" data={['Masculino', 'Femenino', 'Indeferido']}  {...form.getInputProps('genero')}/>
                    </div>
                    <div className='w-[60%]'>
                        <TextInput
                            label="CPF"
                            placeholder="000.000.000-00"
                            component={IMaskInput}
                            mask="000.000.000-00"
                            {...form.getInputProps('cpf')}
                        />
                    </div>
                    <div className='w-[38%] ml-[2%]'>
                        <TextInput
                            label="Pais"
                            placeholder="Input placeholder"
                            {...form.getInputProps('pais')}
                        />
                    </div>
                    <div className='w-[45%]'>
                        <TextInput
                            label="Estado"
                            placeholder="Estado"
                            {...form.getInputProps('estado')}
                        />
                    </div>
                    <div className='w-[50%]'>
                        <TextInput
                            label="Cidade"
                            placeholder="Cidade"
                            {...form.getInputProps('cidade')}
                        />
                    </div>
                    <div className='w-[50%]'>
                        <TextInput
                            label="Email"
                            placeholder="xxxxxx@gmail.com"
                            {...form.getInputProps('email')}
                        />
                    </div>
                    <div className='w-[48%]'>
                        <PasswordInput
                            label="Sua Senha"
                            placeholder="senha"
                            {...form.getInputProps('senha')}
                        />
                    </div>
                    <div className='w-full flex justify-center mt-[7%]' >
                        <Button
                            type='submit'
                            style={{ width: "100px", background : "yellow",color: "black" }}
                        >
                            Enviar
                        </Button>
                    </div>
                </form>
            </div>
        </div> 
    )

            
};
export default Login