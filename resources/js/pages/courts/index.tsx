import { Plus } from 'lucide-react';
import { ButtonSuccess } from '../../../assets/buttons/success';
export default function CourtList() {
    return (
        <>
            <div className="flex justify-end">
                <ButtonSuccess>
                    <Plus size={14} />
                    Nova quadra
                </ButtonSuccess>
            </div>
        </>
    );
}

CourtList.layout = {
    breadcrumbs: [
        {
            title: 'Configuração de quadras',
            href: '/courts',
        },
    ],
};
