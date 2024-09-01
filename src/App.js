import { useState } from 'react';
import Navigation from './components/Navigation'
import Products from './components/Products'
import Sidebar from './components/Sidebar';
import Card from './components/Card'

import products from './data'


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [query, setQuery] = useState('')

  const handleInputChange = e => {
    setQuery(e.target.value)
    
  }

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio filter
  const handleChange = e => {
    setSelectedCategory(e.target.value)  
    
  }

  const filteredData = (products, selected, query) => {
    let filteredProducts = products

    // on Input change
    if(query) {
      filteredProducts = filteredItems
    }
    // selected filter
    if(selected) {
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) => category === selected || color === selected || company === selected || newPrice === selected || title === selected )
    }

    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice}) => (
      <Card key={Math.random()} img={img} title={title} star={star} reviews={reviews} prevPrice={prevPrice} newPrice={newPrice}/>
    ))
  }

  const result = filteredData(products, selectedCategory, query)

  return (
    <div className="App">
 
          <Navigation query={query} handleInputChange={handleInputChange} />
          <div className='flex pt-5'>
            <div className='w-[20%]   z-2'>
              <Sidebar handleChange={handleChange}/>
            </div>
            <div className='pl-5 relative'>
            <Products result={result}/>
            </div>
          </div>
 

    </div>
  );
}

export default App;
