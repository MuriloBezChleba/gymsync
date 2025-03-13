

import { MembershipBlock } from "@/components/membershipBlock";

export default function Planos() {


    return (

        <div className="flex justify-between mx-6">
            <MembershipBlock
                title="Plano Maromba"
                text="lorem ipusim si dolor a mete no penis"
                topics={[
                    '1 mes de fatura',
                    'maromba betinha']
                }
                action={async() => {
                    'use server'
                    console.log('Plano Maromba')
                }}
            />
            <MembershipBlock
                title="Plano Rato de Acadenia"
                text="lorem ipusim si dolor a mete no penis"
                topics={[
                    '3 mes de fatura',
                    'maromba alfa'
                ]}
                action={async() => {
                    'use server'
                    console.log('Plano Rato de Academia')
                }}
            />
            <MembershipBlock
                title="Plano Flaviao"
                text="lorem ipusim si dolor a mete no penis"
                topics={[
                    'Fatura é anual',
                    'maromba Giga_Chad'
                ]}
                action={ async() => {
                    'use server'
                    console.log('Plano Flaviao')
                }}
            />
        </div>
    )
}