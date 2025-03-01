interface FormComponent{
    children:React.ReactNode
    onsubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export function Forms({onsubmit, children}: FormComponent ) {
    return (
        <form className="h-screen w-full flex flex-col items-center justify-center" onSubmit={onsubmit}>
            {children}
        </form>
    )
}