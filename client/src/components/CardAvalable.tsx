import React from "react";
import { ICardItems } from "pages/Home/HomePage";
import { Card, CardContent, createTheme, styled, SxProps, Typography } from "@mui/material";


interface CardAvalableProps {
    items: ICardItems;
    children?: React.ReactNode;
    available?: boolean;
    sx?: SxProps;
}

const disableCardAvalable = {
    '--color': '#939495',
    minWidth: '304px'
} as React.CSSProperties;

const activeCardAvalable = {
    '--color': '#28292C',
    minWidth: '304px'
} as React.CSSProperties;


export default function CardAvalable(props: CardAvalableProps) {
    const { items, available } = props;

    return (
        <Card sx={ available ? activeCardAvalable : disableCardAvalable }>
            <CardContent>
                <Typography sx={{
                    color: 'var(--color)',
                    fontSize: '24px',
                    fontFamily: 'Manrope Bold'
                }}>{ items.title }</Typography>
                <Typography sx={{
                    color: 'var(--color)',
                    fontSize: '14px',
                    fontFamily: 'Manrope Regular'
                }}>{ items.content }</Typography>
                {!available && <Typography sx={{
                    color: 'var(--color)',
                    fontSize: '12px',
                    fontFamily: 'Manrope Regular'
                }}>скоро</Typography>}
            </CardContent>
        </Card>
    )
}