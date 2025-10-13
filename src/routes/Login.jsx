import { useState } from "react"

const Login = () => {

    const [email, setEmail] = useState('')
    const [senha,setSenha] = useState('') 
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')

    function cadastro(e){
        e.preventDefault()
    }

  return (
    <div className="h-dvh flex justify-center items-center">
        <div className="h-[90%] w-[40%]">
            <form onSubmit={cadastro} className="flex flex-col items-center gap-7 bg-yellow-400">
                <div>
                    <label htmlFor="email">email:
                    <input name="email" className="h-10 border-0 border-b-2 border-gray-500 focus:border-gray-700 bg-transparent outline-none " onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="xxxxxx@gmil.com" />
                    </label> 
                </div>
                <div> 
                    <label htmlFor="nome"/>nome:
                    <input name="nome" className="h-10 border-0 border-b-2 border-gray-500 focus:border-gray-700 bg-transparent outline-none autofill:bg-transparent" onChange={(e) => setNome(e.target.value)} value={nome} type="text" placeholder="nome do usuario"/></div>
                <div> 
                    <label htmlFor="cpf"/>CPF:
                    <input name="cpf" className="h-10 border-0 border-b-2 border-gray-500 focus:border-gray-700 bg-transparent outline-none " onChange={(e) => setCpf(e.target.value)} value={cpf} type="text" placeholder="xxx.xxx.xxx-xx" /></div>
                <div> 
                    <label htmlFor="senha"/>senha:
                    <input name="senha" className="h-10 border-0 border-b-2 border-gray-500 focus:border-gray-700 bg-transparent outline-none " onChange={(e) => setSenha(e.target.value)} value={senha} type="text" placeholder="senha"/></div>
                <div> 
                    <label htmlFor="data"/>data:
                    <input name='data' className="h-10 border-0 border-b-2 border-gray-500 focus:border-gray-700 bg-transparent outline-none " type="date" /></div>
                <div> 
                    <label htmlFor="cidade"/>cidade:
                    <input name="cidade" className="h-10 border-0 border-b-2 border-gray-500 focus:border-gray-700 bg-transparent outline-none " type="text" placeholder="cidade"/></div>
                <div> 
                    <label htmlFor="cep"/>CEP:
                    <input className="h-10 border-0 border-b-2 border-gray-500 focus:border-gray-700 bg-transparent outline-none " onChange={(e) => setCpf(e.target.value)} value={cpf} type="text" placeholder="xxx.xxx.xxx-xx" /></div>
                <div className="h-27px">
                    <button type="submit"  onClick={(e) => console.log("clicou")}>cadastrar</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login