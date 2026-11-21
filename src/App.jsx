import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import FeaturedRestaurant from './components/FeaturedRestaurant'
import MoodSection from './components/MoodSection'
import TrendingSection from './components/TrendingSection'
import EventsSection from './components/EventsSection'
import SearchResults from './components/SearchResults'
import RestaurantPage from './components/RestaurantPage'
import BlogPage from './components/BlogPage'
import BlogReviewPage from './components/BlogReviewPage'
import DiscoverPage from './components/DiscoverPage'
import WishlistPage from './components/WishlistPage'
import AccountPage from './components/AccountPage'
import './App.css'

function App() {
  const [page, setPage] = useState('home')
  const [search, setSearch] = useState('')
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)
  const [selectedReview, setSelectedReview] = useState(null)
  const [wishlist, setWishlist] = useState([])

  function handleSearch(value) {
    setSearch(value)
    setPage('results')
  }

  function toggleWishlist(restaurant) {
    setWishlist((currentWishlist) => {
      const isSaved = currentWishlist.some((savedRestaurant) => savedRestaurant.name === restaurant.name)
      if (isSaved) {
        return currentWishlist.filter((savedRestaurant) => savedRestaurant.name !== restaurant.name)
      }
      return [...currentWishlist, restaurant]
    })
  }

  function removeFromWishlist(restaurant) {
    setWishlist((currentWishlist) => currentWishlist.filter((savedRestaurant) => savedRestaurant.name !== restaurant.name))
  }

  return (
    <div>
      <Header onHome={() => setPage('home')} onDiscover={() => setPage('discover')} onBlog={() => setPage('blog')} onWishlist={() => setPage('wishlist')} onAccount={() => setPage('account')} />
      <main className="page">
        {page === 'home' && (
          <>
            <SearchBar onSearch={handleSearch} />
            <FeaturedRestaurant />
            <MoodSection />
            <TrendingSection />
            <EventsSection />
          </>
        )}
        {page === 'results' && (
          <SearchResults search={search} onSearch={handleSearch} wishlist={wishlist} onWishlist={toggleWishlist} onRestaurant={(restaurant) => { setSelectedRestaurant(restaurant); setPage('restaurant') }} />
        )}
        {page === 'discover' && <DiscoverPage wishlist={wishlist} onWishlist={toggleWishlist} onRestaurant={(restaurant) => { setSelectedRestaurant(restaurant); setPage('restaurant') }} />}
        {page === 'wishlist' && <WishlistPage wishlist={wishlist} onDiscover={() => setPage('discover')} onRemove={removeFromWishlist} onRestaurant={(restaurant) => { setSelectedRestaurant(restaurant); setPage('restaurant') }} />}
        {page === 'account' && <AccountPage />}
        {page === 'restaurant' && <RestaurantPage restaurant={selectedRestaurant} wishlist={wishlist} onWishlist={toggleWishlist} />}
        {page === 'blog' && <BlogPage onReview={(review) => { setSelectedReview(review); setSelectedRestaurant(review.restaurant); setPage('blog-review') }} />}
        {page === 'blog-review' && <BlogReviewPage review={selectedReview} onRestaurant={() => setPage('restaurant')} />}
      </main>
    </div>
  )
}

export default App
