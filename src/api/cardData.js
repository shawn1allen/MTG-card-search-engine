import { useState } from "react"

const getCardData = (searchWord) => {

    const set = new Set()
    console.log('Getting card data')

    return fetch(`https://api.magicthegathering.io/v1/cards?name=${searchWord}`)
      .then(r => r.json())
      .then(data => {
        const tempData = data.cards.filter((cards) => {
          if (set.has(cards.name)) {
            return false
          } else {

            set.add(cards.name)
            return true
          }
        })
        return tempData
      })
  }

  export default getCardData