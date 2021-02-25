import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import './infoBox.css';

function InfoBox({ title, cases, isRed, active, total, ...props }) {
    return (
        <Card
            className={`infoBox ${active && 'infoBox__selected'} ${isRed && 'infoBox__red'}` }
            onClick={props.onClick}
        >
            <CardContent>
                <Typography color="textSecondary" className="infoBox__title">
                    {title}
                </Typography>

                <h2 className={`infoBox__cases ${!isRed && 'infoBox__cases--green'}`}>{cases} <small style={{ color: "red", fontSize: '10px' }}>Today</small></h2>

                <Typography color="textSecondary" className="infoBox__total">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
