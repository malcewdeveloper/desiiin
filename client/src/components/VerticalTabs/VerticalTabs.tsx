import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

interface VerticalTabsProps {
    children?: React.ReactNode;
    items: string[];
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props; 

    return (
        <div 
        role='tabpanel' 
        hidden={value != index}
        id={``}
        aria-labelledby={``}
        {...other}>
            {value === index && (
                <Box>
                    <Typography>{ children }</Typography>
                </Box>
            )}
        </div>
    )
}

export default function VerticalTabs(props: VerticalTabsProps) {
    const { children, items } = props;
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    return (
        <>    
            <Box 
            sx={{
                display: 'flex',
                fontFamily: 'Manrope Regular',
                marginBottom: '50px'
            }}>
                <Typography 
                variant="h3" 
                color="#28292C">Для&nbsp;</Typography>
                <Typography 
                variant="h3" 
                sx={{
                    color: '#FC6321',
                    fontFamily: 'Manrope Bold'
                }}>кого?</Typography>
            </Box>
            <Box sx={{
                display: 'flex'
            }}>
                <Tabs
                onChange={handleChange}
                orientation="vertical"
                >
                    {items.map((item, index) => (
                        <Tab 
                        disableRipple={true}
                        sx={{
                            alignItems: 'flex-start',
                            color: '#28292C',
                            fontSize: '24px',
                            fontFamily: 'Manrope Regular',
                            margin: 0,
                            minHeight: 33,
                            marginTop: '12px',
                            marginRight: '177px',
                            padding: 0,
                            position: 'relative',
                            textTransform: 'capitalize',
                            ':hover': {
                                color: '#FC6321'
                            },
                            transition: '0.1s ease-in-out'
                        }} 
                        key={item} 
                        label={item} />
                    ))}
                </Tabs>
                
                <TabPanel value={value} index={0}>
                    <img width={464} height={288} src="http://www.rosphoto.com/images/u/articles/1510/7_5.jpg" alt="" />
                    <img width={464} height={288} src="https://cdn.fotosklad.ru/unsafe/24d33472d338457ebe3ed0f8cc0ba6a9/image.jpg" alt="" />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
            </Box>
        </>
    )
}

