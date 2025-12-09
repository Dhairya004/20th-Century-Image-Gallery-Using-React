import React from 'react'
import { Link } from 'react-router-dom'
import CardItem from './CardItem'
import card_items_contents from '../card_items_contents.json'

export default function CardHolder() {

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column'
  }

  const mainContainerStyle = {
    display: 'flex',
    margin: 'auto',
    width: '90%'
  }

  function cardItemFiller(row_number) {
    const elements = [];
    for (var i = 0; i < 5; i++) {
      let content = card_items_contents[row_number][i];
      elements.push(
        <Link to={content.altText} style={{ textDecoration: 'none', color: 'black', display: 'flex', justifyContent: row_number === 0 ? 'flex-end' : 'initial' }}>
          <CardItem imagePath={content.imagePath} altText={content.altText} title={content.title} />
        </Link>
      );
    }
    return elements;
  }

  return (
    <>
      <div style={mainContainerStyle}>
        <div className="container my-4" style={{containerStyle, }}>
          {cardItemFiller(0)}
        </div>

        <div className="container my-4" style={containerStyle}>
        {cardItemFiller(1)}
        </div>
      </div>
    </>
  )
}