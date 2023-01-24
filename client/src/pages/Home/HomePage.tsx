import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import VerticalTabs from '../../components/VerticalTabs/VerticalTabs';
import CardPlan from '../../components/CardPlan/CardPlan';
import Grid from '@mui/material/Grid';

import home from '../../assets/home.svg';
import CardAvalable from '../../components/CardAvalable';

export interface ICardItems {
    title: string;
    content?: string;
}

export interface IPlan extends ICardItems {
    price?: string | number;
    dateTo?: string;
    available?: string[]
}

const tabItems: string[] = ['Дизайнеры', 'Илюстраторы', 'Фотографы', 'Разработчики', 'Event менеджеры', 'и другие'];
const cardItems: ICardItems[] = [
    {
        title: 'Удобная CMS',
        content: 'Простая и удобная система управления сайтом'
    }, 
    {
        title: 'CRM',
        content: 'Простая CRM для работы с заявками'
    }, 
    {
        title: 'Проекты',
        content: 'Размещай свои проекты'
    }, 
    {
        title: 'Базовое СЕО',
        content: 'Размещай свои проекты'
    }, 
    {
        title: 'Страницы',
        content: 'Размещай свои проекты'
    }, 
    {
        title: 'Блог',
        content: 'Пиши статьи, продвигай их и получай клиентов'
    }, 
    {
        title: 'Шаблоны',
        content: 'Размещай свои проекты'
    }, 
    {
        title: 'Логика',
        content: 'Логически настроеный шаблон для правильного расказа о вашем проекте'
    }, 
]
const planItems: IPlan[] = [
    {
        title: 'Пробный период',
        price: 'Бесплатно',
        dateTo: '7 дней',
        available: ['Доступ к платформе', 'Размещение проектов', 'Создание страинц', 'Блог', 'Формы']
    },
    {
        title: 'Базовый',
        price: 199,
        dateTo: 'в месяц',
        available: ['Доступ к платформе', 'Размещение проектов', 'Создание страинц', 'Блог', 'Формы']
    },
    {
        title: 'Полный доступ',
        price: 399,
        dateTo: 'в месяц',
        available: ['Доступ к платформе', 'Размещение проектов', 'Создание страинц', 'Блог', 'Формы', 'Свой домен', 'Без логотипа сервиса']
    }
]

const HomePage = () => {
    return (
        <Container
        disableGutters
        maxWidth='xl'
        component='main'
        sx={{
            position: 'relative',
            overflow: 'hidden'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                maxWidth: '1264px',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '195px',
                marginBottom: '200px'
            }}>
                <Box sx={{
                    display: 'flex'
                }}>
                    <Box>
                        <Box>
                            <Typography 
                            variant='h5'
                            fontFamily='inherit'
                            fontWeight='700'
                            fontSize='40px'
                            mb='24px'
                            sx={{
                                lineHeight: '48px',
                                maxWidth: '417px'
                            }}>
                                <Typography 
                                variant='caption'
                                color='#FC6321'
                                fontSize='inherit'>30 минут</Typography> и у вас есть сайт-портфолио 
                            </Typography>
                            <Typography 
                            fontFamily='inherit'
                            mb='95px'
                            maxWidth='333px'>
                                Нет сомнений, что сайт повышает вашу ценность на рынке
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: '304px'
                        }}>
                            <Button
                            href='#'
                            sx={{
                                backgroundColor: '#FC6321',
                                color: '#fff',
                                fontFamily: 'inherit',
                                padding: '16px 36px',
                                textTransform: 'unset',
                                mb: '33px',
                                ':hover': {
                                    backgroundColor: '#FC6321',
                                    transition: '0.1s cubic-bezier(0,.06,1,.99)',
                                    opacity: 0.8
                                }
                            }}>
                                Созадать сайт-портфолио
                            </Button>
                            <Box 
                            width='100%'
                            textAlign='center'>
                                <Typography>
                                    <Typography 
                                    variant='caption'
                                    color='#FC6321'
                                    fontSize='inherit'>7 дней</Typography> бесплатно
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    backgroundImage: `url(${ home })`,
                    backgroundRepeat: 'no-repeat',
                    width: '785px',
                    height: '526px',
                    position: 'absolute',
                    right: '-8%'
                }}>
                </Box>
            </Box>
            <Box sx={{
                maxWidth: '1264px',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                <VerticalTabs items={tabItems} />
            </Box>
            <Box sx={{
                maxWidth: '1264px',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '170px',
                display: 'flex'
            }}>
                <Box mr='16px'>
                    <Typography sx={{
                        color: '#FC6321',
                        fontFamily: 'Manrope Bold',
                        fontSize: '24px',
                        marginBottom: '24px'
                    }}>Уже работает</Typography>
                    <Grid
                    container
                    rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {cardItems.map(item => (
                            <Grid item key={item.title} xs={6}>
                                <CardAvalable 
                                items={ item }
                                available={ true } />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box>
                    <Typography sx={{
                        color: '#28292C',
                        fontFamily: 'Manrope Bold',
                        fontSize: '24px', 
                        marginBottom: '24px'
                    }}>Скоро</Typography>
                    <Grid 
                    container
                    rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {cardItems.map(item => (
                            <Grid item key={item.title} xs={6}>
                                <CardAvalable 
                                items={ item }
                                available={ false } />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
            <Box sx={{
                maxWidth: '747px',
                marginTop: '200px',
                marginLeft: 'auto',
                marginRight: 'auto',
                textAlign: 'center'
            }}>
                <Typography variant='h2' sx={{
                    color: '#FC6321',
                    fontFamily: 'Manrope Bold',
                    fontSize: '80px',
                    lineHeight: '80px',
                    margin: 0,
                    '::first-letter': {
                        fontFamily: 'Manrope Medium',
                        color: '#28292C'
                    }
                }}>Я просто не нашел</Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '56px'
                }}>
                    <Box sx={{
                        color: '#28292C',
                        marginTop: '15px',
                        textAlign: 'start'
                    }}>
                        <Typography fontSize={14}>Владислав Мовчан</Typography>
                        <Typography sx={{
                            fontSize: '14px',
                            opacity: 0.5
                        }}>UX/UI designer</Typography>
                    </Box>
                    <Typography sx={{
                        fontSize: '24px',
                        lineHeight: '26px',
                        maxWidth: '268px',
                        textAlign: 'start'
                    }}>где удобно размещать свои проекты</Typography>
                </Box>
                <Button                            
                href='#'
                sx={{
                    backgroundColor: '#FC6321',
                    color: '#fff',
                    fontFamily: 'inherit',
                    padding: '12px 44.5px',
                    textTransform: 'unset',
                    mb: '33px',
                    ':hover': {
                        backgroundColor: '#FC6321',
                        transition: '0.1s cubic-bezier(0,.06,1,.99)',
                        opacity: 0.8
                    }
                }}>
                    Попробывать бесплатно
                </Button>
            </Box>
            <Box sx={{
                marginTop: '200px',
                marginLeft: 'auto',
                marginRight: 'auto',
                maxWidth: '1264px',
                textAlign: 'center'
            }}>
                <Typography 
                sx={{
                    display: 'inline-block',
                    fontSize: '40px',
                    fontFamily: 'Manrope Regular',
                    marginBottom: '42px'
                }}>Это&nbsp;
                    <Typography 
                    sx={{
                        display: 'inline-block',
                        color: '#FC6321',
                        fontSize: 'inherit',
                        fontFamily: 'Manrope Bold'
                    }}>очень&nbsp;</Typography> 
                    дешево!
                </Typography>
                <Box sx={{
                    display: 'flex',
                    gap: '16px',
                    justifyContent: 'center'
                }}>
                    {planItems.map(item => (
                        <CardPlan 
                        key={ item.title }
                        items={ item }
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '100%',
                            maxWidth: '304px',
                            padding: '24px 16px',
                        }}
                        ></CardPlan>
                    ))}
                </Box>
            </Box>
            <Box sx={{
                marginTop: '160px'
            }}></Box>
        </Container>
    )   
}

export default HomePage;