'use client'

interface BlockComponents{
    title: string
    text: string
    topics: string []
    action: () => any
}

export function MembershipBlock ({title, text, topics, action}: BlockComponents) {
    return(
        <div className="bg-white rounded-2xl text-black p-8">
            <h1 className="mt-5 text-center">{title}</h1>
            <p className="mt-5">{text}</p>
            <ul className="mt-5">
                {topics.map(item => {
                   return <li>{item}</li> 
                })}
            </ul>
            <button className="rounded-2xl bg-yellow-300" onClick={action}>Comprar</button>
        </div>
    )

}


