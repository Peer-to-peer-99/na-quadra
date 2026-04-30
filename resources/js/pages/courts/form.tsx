import { FormTitle } from '../../../assets/forms/form-title';
import { Input } from '../../../assets/inputs/input';

export default function FormCourt() {
    return (
        <>
            <div className="space-y-4">
                <div className="space-y-1">
                    <FormTitle>Nome da quadra</FormTitle>
                    <Input placeholder="Ex: Quadra 4 - Área Premium" />
                </div>
                <div className="space-y-1">
                    <FormTitle>Esporte Principal</FormTitle>
                </div>
            </div>
        </>
    );
}
