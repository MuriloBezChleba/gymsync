'use client'
import { useRouter } from "next/navigation";

export function SearchButton(){
    const router = useRouter()
    const click = () => {
        router.push('/search')
    }
    return(
    <button onClick={click}>
          <img className="w-8 h-8" src="search.svg" alt="" />
    </button>
    )
}