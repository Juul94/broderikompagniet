interface RoutesProps {
    name: string;
    route?: string;
    children?: RoutesProps[];
}

const routes: RoutesProps[] = [
    {
        name: 'Home',
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
        name: 'Kategori',
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
];

export default routes;
