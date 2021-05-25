import React from 'react'
import './widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import  FiberManualRecordIcon  from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {
const newsArticle = (heading, subtitle ) => (
    <div className="widgets__article">
        <div className="widget__articleLeft">
            <FiberManualRecordIcon/>
        </div>
        <div className="widget__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
);

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2> LinkedIn News </h2>
                <InfoIcon/>
            </div>
            {newsArticle("Kiran react is back","top news- 9999 readers")}
            {newsArticle("Corona Virus: Uk updated","top news- 9250 readers")}
            {newsArticle("kiran react is back","top news- 9999 readers")}
            {newsArticle("kiran react is back","top news- 9999 readers")}
            {newsArticle("kiran react is back","top news- 9999 readers")}
            {newsArticle("kiran react is back","top news- 9999 readers")}
            {newsArticle("kiran react is back","top news- 9999 readers")}
            {newsArticle("kiran react is back","top news- 9999 readers")}
            {newsArticle("kiran react is back","top news- 9999 readers")}
            {newsArticle("kiran react is back","top news- 9999 readers")}
            {newsArticle("kiran react is back","top news- 9999 readers")}
        </div>

    )
}

export default Widgets
