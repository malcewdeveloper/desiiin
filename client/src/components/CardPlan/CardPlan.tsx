import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import CheckIcon from '@mui/icons-material/Check';
import { Button, ListItem, ListItemIcon, ListItemText, SxProps } from '@mui/material';
import { IPlan } from 'pages/Home/HomePage';


interface PlanCardProps {
    items: IPlan;
    sx?: SxProps; 
    children?: '';
}

interface CardHeaderProps {
    sx?: SxProps;
    children: React.ReactNode;
}

const CardHeader = (props: CardHeaderProps) => {
    const { sx, children } = props;

    return (
        <Box sx={sx}>
            { children }
        </Box>
    )
}

export default function CardPlan(props: PlanCardProps) {
    const { items, children, sx, ...other } = props;
    return (
        <Box sx={{ 
            maxWidth: '304px'
        }}>
            <Card 
            variant='outlined' 
            sx={ sx }>
                <CardHeader sx={{
                    textAlign: 'start',
                    marginBottom: '18px'
                }}>
                    <Typography sx={{
                        fontSize: '14px',
                        fontFamily: 'Manrope Regular'
                    }}>{ items.title }</Typography>
                    <Typography sx={{
                        fontSize: '24px',
                        fontFamily: 'Manrope Bold'
                    }}>{ typeof items.price === 'number' ? `${items.price} рублей` : 'Бесплатно' }</Typography>
                    <Typography sx={{
                        fontSize: '14px',
                        fontFamily: 'Manrope Regular'
                    }}>{ items.dateTo }</Typography>
                </CardHeader>
                <CardContent sx={{
                    flex: 'auto',
                    padding: 0,
                    marginBottom: '56px'
                }}>
                    <List disablePadding>      
                        {items.available.map(item => (
                            <ListItem 
                            key={item}
                            disableGutters
                            sx={{
                                padding: '6px 0'
                            }}
                            >
                                <ListItemIcon sx={{
                                    minWidth: '35px'
                                }}>
                                    <CheckIcon />
                                </ListItemIcon>
                                <ListItemText sx={{
                                    margin: 0
                                }}>{ item }</ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
                <CardActions sx={{
                    padding: 0
                }}>
                    <Button sx={{
                        backgroundColor: '#FC6321',
                        color: '#fff',
                        fontFamily: 'inherit',
                        padding: '12px 28.5px',
                        textTransform: 'unset',
                        width: '100%',
                        minWidth: '272px',
                        ':hover': {
                            backgroundColor: '#FC6321',
                            transition: '0.1s cubic-bezier(0,.06,1,.99)',
                            opacity: 0.8
                        }
                    }}>Взять</Button>
                </CardActions>
            </Card>
        </Box>
    )
}