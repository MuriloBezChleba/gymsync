'use client'
import { Forms } from "@/components/form";
import { Input } from "@/components/input";
import { eventNames } from "process";
import { FormEvent } from "react";

export default function Search() {

    return (
        <Forms 
            onsubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault()
                const formData = new FormData(event.currentTarget)
                const formValue = {
                    sexo: formData.get('sexo'),
                    idade: formData.get('idade')
                }
                console.log(formValue.sexo)


            } }
        >
        <Input
            placeholder="Sexo"
            nome="sexo"
            type="text"
        />
        <Input
            placeholder="Idade"
            nome="idade"
            type="text"
        />

            <button type="submit" >
                <img className="text-white" src="search.min.svg" alt="search" />
            </button>

        </Forms>
    );
}