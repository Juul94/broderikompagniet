import React, { useState } from 'react';
import ScrollableTabsButtonAuto from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabScrollButton from '@mui/material/TabScrollButton';
import { Box } from '@mui/material';

interface TabbedSectionsProps {
    sections: string[];
    children: React.ReactNode[];
}

const TabbedSections: React.FC<TabbedSectionsProps> = ({ sections, children }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    return (
        <Box
            sx={{
                '.MuiTabScrollButton-root.Mui-disabled': {
                    display: 'none',
                },
            }}>
            <ScrollableTabsButtonAuto
                value={activeTab}
                onChange={handleTabChange}
                variant='scrollable'
                ScrollButtonComponent={TabScrollButton}
                scrollButtons
                allowScrollButtonsMobile>
                {sections.map((section, index) => (
                    <Tab key={index} label={section} />
                ))}
            </ScrollableTabsButtonAuto>

            {children
                .filter((item, index) => activeTab === index)
                .map((child, index) => (
                    <div key={index}>{child}</div>
                ))}
        </Box>
    );
};

export default TabbedSections;
