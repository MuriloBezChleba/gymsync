import { SearchButton } from "./serachButton";

export function Header() {
    return (
        <div className="flex justify-between bg-amber-50 text-black p-6 mb-5">
            <h1 className="text-xl">Logo</h1>
            <div className="flex gap-10" id="linksPaginas">
                <h1 className="text-xl">Sobre</h1>
                <h1 className="text-xl">Planos</h1>
            </div>
            <SearchButton/>
        </div>
    )
}