interface InputComponent{
    placeholder: string
    nome: string
    type: string
}


export function Input({placeholder, nome, type}: InputComponent){
    return(
        <input className="bg-gray-400 border-gray-50 border-0.5 text-black my-1 px-1 rounded-sm"
        placeholder={placeholder} name={nome} type={type}/>
    )
}