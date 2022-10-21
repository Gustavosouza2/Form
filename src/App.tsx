import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import './index.css';

type Inputs = {
  name: string,
  email: string,
  senha: string,
  senhaconfirm: string,
  
};

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <div className="w-screen h-screen bg-slate-800 flex flex-col items-center justify-center text-gray-100">
      <div className="flex flex-wrap justify-center mt-50">
        <div className="w-full max-w-sm bg-gray-900 p-26 rounded-2xl">
          <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 text-center mt-10 mb-3">Cadastro</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="shadown-md  rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
                Nome de Usuário
              </label>
              <input type="text" id="name" className="shadown appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadown-outline" 
              placeholder="Nome de usuário" {...register("name", { required: true })}
              /> 
              
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
                Email
              </label>
              <input type="email" id="email" className="shadown appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadown-outline" 
              placeholder="Digite seu email" {...register("email",{ required: true })}
              /> 
            </div>
            <div className="mb-6">
              <label htmlFor="Senha" className="block text-gray-300 text-sm font-bold mb-2">
                Senha
              </label>
              <input type="password" id="senha" className="shadown appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadown-outline" 
              placeholder="Digite sua Senha" {...register("senha", { required: true })}
              /> 
            </div>
            <div className="mb-14">
              <label htmlFor="Senhaconfirm" className="block text-gray-300 text-sm font-bold mb-2">
                Confirmar Senha
              </label>
              <input type="password" id="senhaconfirm" className="shadown appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadown-outline" 
              placeholder="Confirme sua Senha" {...register("senhaconfirm", { required: true })}
              /> 
            </div>
            
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-gradient-to-r from-green-500 to-blue-500 hover:bg-pink-700 text-white font-bold py-2 px-28 rounded focus:outline-none focus:shadow-outline">
                Enviar
              </button>
            </div>
          </form>
          {errors.name?.type === 'required' && <p className="text-center text-red-500" role="alert">Informe seu nome de usuário</p>}
          {errors.email?.type === 'required' && <p className="text-center text-red-500" role="alert">Informe seu email</p>}
          {errors.senha?.type === 'required' && <p className="text-center text-red-500" role="alert">Informe sua senha</p>}
          {errors.senhaconfirm?.type === 'required' && <p className="text-center text-red-500" role="alert">Informe sua senha novamente</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
