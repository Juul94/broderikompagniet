import day_1 from '../img/grafisk-arbejde/day_1.jpg';
import day_5 from '../img/grafisk-arbejde/day_5.jpg';
import day_10 from '../img/grafisk-arbejde/day_10.jpg';

interface ProcessStep {
    label: string;
    description: string;
    image: string;
}

const processSteps: ProcessStep[] = [
    {
        label: 'Dag 1',
        description: 'Kundens idé',
        image: day_1.src,
    },
    {
        label: 'Dag 5',
        description: 'Vores rentegning',
        image: day_5.src,
    },
    {
        label: 'Dag 10',
        description: 'Klar produkt',
        image: day_10.src,
    },
];

export default processSteps;
