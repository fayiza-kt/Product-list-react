import React from 'react'
import ProductList from '../../components/ProductList/ProductList'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>
      <div style={{ padding: '1rem' }}>
        
        <Header />
        <ProductList />
        <Footer />
        
      </div>
    </div>
  )
}

export default Home
