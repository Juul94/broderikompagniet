const getExamplePhoneNumber = (countryCode: string): string => {
    switch (countryCode) {
        case '+355':
            return '123 456 789';
        case '+376':
            return '12 34 56';
        case '+43':
            return '1234 567890';
        case '+375':
            return '29 1234567';
        case '+32':
            return '123 45 67 89';
        case '+387':
            return '61 234 567';
        case '+359':
            return '123 456 789';
        case '+385':
            return '12 345 678';
        case '+357':
            return '12 345678';
        case '+420':
            return '123 456 789';
        case '+45':
            return '12 34 56 78';
        case '+372':
            return '1234 5678';
        case '+298':
            return '123456';
        case '+358':
            return '12 3456789';
        case '+33':
            return '1 23 45 67 89';
        case '+49':
            return '12345 67890';
        case '+350':
            return '12345678';
        case '+30':
            return '123 456 7890';
        case '+36':
            return '1 234 5678';
        case '+354':
            return '123 4567';
        case '+353':
            return '12 345 6789';
        case '+39':
            return '123 456 7890';
        case '+383':
            return '44 123 456';
        case '+371':
            return '12 345 678';
        case '+423':
            return '123 4567';
        case '+370':
            return '6 1234567';
        case '+352':
            return '123 456 789';
        case '+356':
            return '12 345 678';
        case '+373':
            return '12 345 678';
        case '+377':
            return '12 345 678';
        case '+382':
            return '67 123 456';
        case '+31':
            return '6 12345678';
        case '+389':
            return '70 123 456';
        case '+47':
            return '12 34 56 78';
        case '+48':
            return '123 456 789';
        case '+351':
            return '912 345 678';
        case '+40':
            return '712 345 678';
        case '+7':
            return '912 345-67-89';
        case '+378':
            return '66 123456';
        case '+381':
            return '64 1234567';
        case '+421':
            return '912 345 678';
        case '+386':
            return '31 234 567';
        case '+34':
            return '612 345 678';
        case '+46':
            return '12-345 67 89';
        case '+41':
            return '12 345 67 89';
        case '+380':
            return '67 123 4567';
        case '+44':
            return '1234 567890';
        default:
            return '';
    }
};

export default getExamplePhoneNumber;
