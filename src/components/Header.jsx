function Header(props) {
  return (
    <header className="header">
      <a className="logo" href="/" onClick={(event) => { event.preventDefault(); props.onHome() }}>FoodAdvisor</a>
        <nav>
            <a href="#discover" onClick={(event) => { event.preventDefault(); props.onDiscover() }}>Discover</a>
            <a href="#blog" onClick={(event) => { event.preventDefault(); props.onBlog() }}>Foodie Blog</a>
            <a href="#wishlist" onClick={(event) => { event.preventDefault(); props.onWishlist() }}>Wishlist</a>
            <a href="#reviews">Your rest</a>
        </nav>
        <button className="account-button" type="button" onClick={props.onAccount}>Your account</button>
    </header>
  )
}

export default Header
