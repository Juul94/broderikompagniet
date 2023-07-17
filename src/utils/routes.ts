interface RoutesProps {
    name: string;
    route?: string;
    children?: RoutesProps[];
}

const routes: RoutesProps[] = [
    {
        name: 'Forside',
        route: '',
    },
    {
        name: 'Bestilling',
        route: 'bestilling',
    },
    {
        name: 'Galleri',
        route: 'galleri',
    },
    {
        name: 'Services',
        route: 'services',
    },
    {
        name: 'Skrifttyper',
        route: 'skrifttyper',
    },
    {
        name: 'Materiale',
        route: 'materiale',
    },
    {
        name: 'Grafisk arbejde',
        route: 'grafisk-arbejde',
    },
    {
        name: 'Kategorier',
        children: [
            {
                name: 'Dåbskjoler',
                route: 'daabskjoler',
            },
            {
                name: 'Caps',
                route: 'caps',
            },
            {
                name: 'Badges & Mærker',
                route: 'badges-og-maerker',
            },
        ],
    },
    {
        name: 'Kontakt',
        route: 'kontakt',
    },
];

export default routes;
