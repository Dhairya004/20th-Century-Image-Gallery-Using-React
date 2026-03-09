import React from 'react'
import { Link } from 'react-router-dom'
import CardItem from './CardItem'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import card_items_contents from '../card_items_contents.json'

export default function CardHolder() {

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'transparent'
  }

  const mainContainerStyle = {
    display: 'flex',
    marginLeft: '1%',
    width: '90%'
  }

  function cardItemFiller(row_number) {
    const elements = [];
    for (var i = 0; i < 5; i++) {
      let content = card_items_contents[row_number][i];
      elements.push(
        <Link to={content.altText} style={{ textAlign: row_number ? 'right' : 'left', textDecoration: 'none', color: 'black', display: 'flex', justifyContent: row_number === 0 ? 'flex-end' : 'initial' }}>
          {/* <CardItem imagePath={content.imagePath} altText={content.altText} title={content.title} /> */}
          <div style={{ backgroundColor: 'transparent' , width: '160px', height: '50px', border: '3px solid black', padding: '10px', margin: '12px' }}>
            {row_number ? <>{content.title} <ArrowForwardIosIcon /></> : <><ArrowBackIosNewIcon /> {content.title}</>}
            {/* {<ArrowForwardIosIcon />} */}
          </div>
        </Link>
      );
    }
    return elements;
  }

  return (
    <>
      <div style={mainContainerStyle}>
        <div className="container my-8" style={containerStyle}>
          {cardItemFiller(0)}
        </div>

        <div className="container my-8" style={containerStyle}>
        {cardItemFiller(1)}
        </div>
      </div>
    </>
  )
}
