'use client'
import './page.css'


export default function Form() {

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const formValues = {
            nome: formData.get('nome'),
            email: formData.get('email'),
            celular: formData.get('celular'),
            senha: formData.get('senha')
        }
        console.log(formValues.email)

        await fetch('https://bbad-189-121-202-69.ngrok-free.app/api/v1/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(formValues)
        })
    }


    return (
        <div className="h-screen w-full flex flex-col items-center justify-center">
            <div>
                <p className="text-9x1">Formulario</p>
            </div>
            <form onSubmit={handleSubmit} action="">
                <div className='inputs'>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" />
                </div>
                <div className='inputs'>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" />
                </div>
                <div className='inputs'>
                    <label htmlFor="celular">Celular</label>
                    <input type="text" name="celular" />
                </div>
                <div className='inputs'>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" />
                </div>
                <button className='bg-amber-700 w-full rounded-sm mt-2' type="submit">Enviar</button>
            </form>
        </div>
    );
}