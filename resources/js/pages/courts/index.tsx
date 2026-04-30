import { Plus } from 'lucide-react';
import { ButtonSuccess } from '../../../assets/buttons/success';
import { Dialog, DialogTitle, DialogContent } from '../../../assets/dialogs';
import { useState } from 'react';
import CreateCourt from './create';

export default function CourtList() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="flex justify-end">
                <ButtonSuccess onClick={() => setOpen(true)}>
                    <Plus size={14} />
                    Nova quadra
                </ButtonSuccess>
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogTitle>Nova Quadra</DialogTitle>
                    <DialogContent>
                        <CreateCourt />
                    </DialogContent>
                </Dialog>
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
