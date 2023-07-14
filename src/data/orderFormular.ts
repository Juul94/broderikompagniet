interface Materiale {
    haardt: string[];
    bloedt: string[];
    fleeceOl: string[];
    placering: string[];
}

const materiale: Materiale = {
    haardt: ['Lærred', 'Canvas', 'Denim', 'Læder', 'Micro Fiver', 'Nylon/Satin', 'Twill/Poplin'],
    bloedt: [
        'Interlock',
        'Jerset',
        'Pique',
        'Blødt 100% Bomuld',
        'Blødt 50/50 blanding',
        'Soft shell',
    ],
    fleeceOl: [
        'Fleece',
        'Poloar Fleece',
        'Sweatshirt',
        'Frotté',
        'Thermo undertøj',
        'Velour/Ruskind',
    ],
    placering: [
        'Taske',
        'Caps m/4 felter',
        'Caps m/6 felter inkl. midter stikning på front',
        'Krave',
        'Manchet',
        'Jakke ryg',
        'Bryst',
        'Visors',
        'Andet',
    ],
};

export default materiale;
