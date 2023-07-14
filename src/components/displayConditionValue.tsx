import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import { FocusEventHandler } from 'react';

interface ConditionValueProps {
    conditionFirst: string;
    conditionSecond: string;
    label: {
        name: string;
        id: string;
        errorText: string;
    };
    select: {
        labelId: string;
        id: string;
        name: string;
        value: string;
    };
    action: {
        onChange: (event: SelectChangeEvent<string>) => void;
        onBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
        onTouch: boolean;
        onError: any;
    };
    menuItems: string[];
}

export const ConditionValue: React.FC<ConditionValueProps> = ({
    conditionFirst,
    conditionSecond,
    label,
    select,
    action,
    menuItems,
}) => {
    if (conditionFirst === conditionSecond) {
        return (
            <FormControl
                fullWidth
                sx={{
                    '.MuiFormLabel-filled, .MuiInputLabel-shrink': {
                        backgroundColor: '#ffffff',
                        px: '5px',
                    },
                }}>
                <InputLabel
                    id={label.id}
                    size='small'
                    sx={{
                        ...(action.onTouch &&
                            action.onError && {
                                color: 'error.main',
                            }),
                    }}>
                    {label.name}
                </InputLabel>
                <Select
                    labelId={select.labelId}
                    id={select.id}
                    name={select.name}
                    value={select.value}
                    onChange={action.onChange}
                    onBlur={action.onBlur}
                    error={action.onTouch && Boolean(action.onError)}
                    size='small'>
                    <MenuItem value=''>Vælg</MenuItem>
                    {menuItems.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>

                {action.onTouch && action.onError && (
                    <FormHelperText
                        sx={{
                            color: 'error.main',
                        }}>
                        {label.errorText}
                    </FormHelperText>
                )}
            </FormControl>
        );
    }

    return null;
};

export default ConditionValue;
