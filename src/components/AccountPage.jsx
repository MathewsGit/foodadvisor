import { useState } from 'react'
import restaurants from './restaurantData'

function AccountPage() {
  const [section, setSection] = useState('Diet')
  const [name, setName] = useState('Your name')
  const [about, setAbout] = useState('Tell people a little about yourself.')

  return (
    <section className="account-page">
      <div className="account-profile">
        <div className="account-avatar" aria-label="Profile photo" role="img">🙂</div>
        <div className="account-profile-details">
          <label className="account-name-label" htmlFor="account-name">Your name</label>
          <input id="account-name" value={name} onChange={(event) => setName(event.target.value)} />
          <label className="account-name-label" htmlFor="account-about">About you</label>
          <textarea id="account-about" value={about} onChange={(event) => setAbout(event.target.value)} rows="2" />
        </div>
      </div>

      <nav className="account-tabs" aria-label="Account settings">
        <button className={section === 'Diet' ? 'active' : ''} type="button" onClick={() => setSection('Diet')}>Diet</button>
        <button className={section === 'General' ? 'active' : ''} type="button" onClick={() => setSection('General')}>General</button>
        <button className={section === 'Other settings' ? 'active' : ''} type="button" onClick={() => setSection('Other settings')}>Other settings</button>
        <button className={section === 'Admin' ? 'active admin-tab' : 'admin-tab'} type="button" onClick={() => setSection('Admin')}>Admin</button>
      </nav>

      <div className="account-settings">
        {section === 'Diet' && <DietSettings />}
        {section === 'General' && <GeneralSettings />}
        {section === 'Other settings' && <OtherSettings />}
        {section === 'Admin' && <AdminSettings />}
      </div>
    </section>
  )
}

function AdminSettings() {
  const [adminSection, setAdminSection] = useState('Accounts')
  const sections = ['Accounts', 'Restaurants', 'Community posts', 'Reports', 'Activity']

  return (
    <section className="admin-dashboard">
      <div className="admin-sidebar">
        <p className="small-title">Admin tools</p>
        {sections.map((item) => (
          <button className={adminSection === item ? 'active' : ''} type="button" key={item} onClick={() => setAdminSection(item)}>{item}</button>
        ))}
      </div>
      <div className="admin-panel">
        {adminSection === 'Accounts' && <AdminAccounts />}
        {adminSection === 'Restaurants' && <AdminRestaurants />}
        {adminSection === 'Community posts' && <AdminPosts />}
        {adminSection === 'Reports' && <AdminReports />}
        {adminSection === 'Activity' && <AdminActivity />}
      </div>
    </section>
  )
}

function AdminAccounts() {
  return (
    <section>
      <p className="small-title">Admin overview</p>
      <h2>Accounts</h2>
      <p className="account-description">Manage FoodAdvisor members and their account status.</p>
      <div className="admin-metrics"><div><strong>1,284</strong><span>Total accounts</span></div><div><strong>36</strong><span>Joined this month</span></div></div>
      <div className="admin-list">
        <div className="admin-list-heading"><strong>Recent accounts</strong><span>Status</span></div>
        <div><span>Sarah Ahmed</span><span className="admin-status">Active</span></div>
        <div><span>Omar Ali</span><span className="admin-status">Active</span></div>
        <div><span>Maya Saleh</span><span className="admin-status">Active</span></div>
      </div>
    </section>
  )
}

function AdminRestaurants() {
  return (
    <section>
      <p className="small-title">Admin overview</p>
      <h2>Restaurants</h2>
      <p className="account-description">Manage restaurant profiles, branch information and ratings.</p>
      <div className="admin-list">
        <div className="admin-list-heading"><strong>Restaurant</strong><span>Branch · Rating</span></div>
        {restaurants.slice(0, 5).map((restaurant) => (
          <div key={restaurant.name}><span>{restaurant.name}</span><span>{restaurant.location} · ★ {restaurant.rating}</span></div>
        ))}
      </div>
    </section>
  )
}

function AdminPosts() {
  const posts = restaurants.flatMap((restaurant) => restaurant.reviews.map((review) => ({ ...review, restaurant }))).slice(0, 5)

  return (
    <section>
      <p className="small-title">Admin overview</p>
      <h2>Community posts</h2>
      <p className="account-description">Review and manage posts shared by the community.</p>
      <div className="admin-list">
        <div className="admin-list-heading"><strong>Post</strong><span>Restaurant · Rating</span></div>
        {posts.map((post) => (
          <div key={`${post.restaurant.name}-${post.title}`}><span>{post.title}</span><span>{post.restaurant.name} · ★ {post.rating}</span></div>
        ))}
      </div>
    </section>
  )
}

function AdminReports() {
  return (
    <section>
      <p className="small-title">Admin overview</p>
      <h2>Reports</h2>
      <p className="account-description">Review posts, accounts and restaurant information reported by users.</p>
      <div className="admin-list">
        <div className="admin-list-heading"><strong>Reported item</strong><span>Type · Status</span></div>
        <div><span>Review needs attention</span><span>Community post · Pending</span></div>
        <div><span>Restaurant details update</span><span>Restaurant · Pending</span></div>
        <div><span>Account conduct report</span><span>Account · In review</span></div>
      </div>
    </section>
  )
}

function AdminActivity() {
  const bars = [
    { day: 'Mon', height: 38 }, { day: 'Tue', height: 57 }, { day: 'Wed', height: 46 },
    { day: 'Thu', height: 76 }, { day: 'Fri', height: 62 }, { day: 'Sat', height: 92 }, { day: 'Sun', height: 68 },
  ]

  return (
    <section>
      <p className="small-title">Admin overview</p>
      <h2>Activity</h2>
      <p className="account-description">A snapshot of recent FoodAdvisor activity.</p>
      <div className="admin-metrics"><div><strong>842</strong><span>Reviews this month</span></div><div><strong>316</strong><span>New members</span></div></div>
      <div className="activity-chart" aria-label="Weekly community activity">
        {bars.map((bar) => <div className="activity-chart-column" key={bar.day}><span className="activity-chart-bar" style={{ height: `${bar.height}%` }} /><small>{bar.day}</small></div>)}
      </div>
      <p className="results-note">Community activity this week</p>
    </section>
  )
}

function DietSettings() {
  const [likes, setLikes] = useState(['Mediterranean'])
  const [dislikes, setDislikes] = useState([])
  const [dietaryInfo, setDietaryInfo] = useState([])
  const [allergens, setAllergens] = useState([])

  function toggleChoice(value, values, setValues) {
    setValues(values.includes(value) ? values.filter((item) => item !== value) : [...values, value])
  }

  return (
    <section>
      <h2>Dietary preferences</h2>
      <p className="account-description">Help us suggest meals that fit your taste and dietary needs.</p>
      <div className="account-preference-grid">
        <PreferenceCard title="Foods you like" choices={['Mediterranean', 'Asian', 'Spicy food', 'Seafood', 'Vegetarian']} values={likes} onToggle={(value) => toggleChoice(value, likes, setLikes)} />
        <PreferenceCard title="Foods you dislike" choices={['Spicy food', 'Seafood', 'Mushrooms', 'Dairy', 'Nuts']} values={dislikes} onToggle={(value) => toggleChoice(value, dislikes, setDislikes)} />
      </div>
      <div className="account-check-section">
        <h3>Dietary information</h3>
        <p className="account-description">Select any dietary preferences you want restaurants to know about.</p>
        <ChoiceList choices={['Vegetarian', 'Vegan', 'Halal', 'Gluten-free']} values={dietaryInfo} onToggle={(value) => toggleChoice(value, dietaryInfo, setDietaryInfo)} />
      </div>
      <div className="account-check-section">
        <h3>Allergens</h3>
        <p className="account-description">Select ingredients you need to avoid.</p>
        <ChoiceList choices={['Peanuts', 'Tree nuts', 'Dairy', 'Eggs', 'Gluten', 'Shellfish']} values={allergens} onToggle={(value) => toggleChoice(value, allergens, setAllergens)} />
      </div>
    </section>
  )
}

function PreferenceCard(props) {
  return (
    <div className="account-preference-card">
      <h3>{props.title}</h3>
      <div className="preference-chips">
        {props.choices.map((choice) => (
          <button className={props.values.includes(choice) ? 'selected' : ''} type="button" key={choice} onClick={() => props.onToggle(choice)}>{choice}</button>
        ))}
      </div>
    </div>
  )
}

function ChoiceList(props) {
  return (
    <div className="account-choice-list">
      {props.choices.map((choice) => (
        <label key={choice}>
          <input type="checkbox" checked={props.values.includes(choice)} onChange={() => props.onToggle(choice)} />
          <span>{choice}</span>
        </label>
      ))}
    </div>
  )
}

function GeneralSettings() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [saved, setSaved] = useState(false)
  const [posts, setPosts] = useState(['A fresh start at Green Garden', 'The Big Mac still delivers'])

  function saveChanges(event) {
    event.preventDefault()
    setSaved(true)
  }

  function removePost(post) {
    setPosts(posts.filter((item) => item !== post))
  }

  return (
    <section>
      <h2>General settings</h2>
      <p className="account-description">Manage your login details and Foodie Blog posts.</p>
      <form className="account-form" onSubmit={saveChanges}>
        <label>Email address<input type="email" value={email} onChange={(event) => { setEmail(event.target.value); setSaved(false) }} placeholder="you@example.com" /></label>
        <label>Password<input type="password" value={password} onChange={(event) => { setPassword(event.target.value); setSaved(false) }} placeholder="Enter a new password" /></label>
        <button className="account-save-button" type="submit">Save changes</button>
        {saved && <span className="account-saved-message">Your changes are saved for this session.</span>}
      </form>
      <div className="account-check-section blog-management">
        <h3>Manage blog posts</h3>
        <p className="account-description">Review and manage your recent posts.</p>
        {posts.length > 0 ? posts.map((post) => (
          <div className="managed-post" key={post}>
            <span>{post}</span>
            <div><button type="button">Edit</button><button type="button" onClick={() => removePost(post)}>Delete</button></div>
          </div>
        )) : <p className="account-description">You don't have any blog posts yet.</p>}
      </div>
    </section>
  )
}

function OtherSettings() {
  const [showRegistration, setShowRegistration] = useState(false)
  const [message, setMessage] = useState('')

  function submitRegistration(event) {
    event.preventDefault()
    setMessage('Your restaurant details are ready to submit when account services are connected.')
  }

  return (
    <section>
      <h2>Other settings</h2>
      <p className="account-description">Restaurant and account management.</p>
      <div className="account-action-card">
        <div><h3>Restaurant owners</h3><p>Register your restaurant to add its details and reach local food lovers.</p></div>
        <button className="account-save-button" type="button" onClick={() => { setShowRegistration(!showRegistration); setMessage('') }}>{showRegistration ? 'Close form' : 'Register restaurant'}</button>
      </div>
      {showRegistration && (
        <form className="account-form registration-form" onSubmit={submitRegistration}>
          <label>Restaurant name<input type="text" placeholder="Restaurant name" required /></label>
          <label>Branch location<input type="text" placeholder="Area or branch address" required /></label>
          <button className="account-save-button" type="submit">Continue registration</button>
          {message && <span className="account-saved-message">{message}</span>}
        </form>
      )}
      <div className="account-danger-card">
        <h3>Account actions</h3>
        <p>These actions affect your account and posts.</p>
        <button type="button" onClick={() => setMessage('Account deletion is not connected yet.')}>Delete account</button>
        <button type="button" onClick={() => setMessage('Post deletion is not connected yet.')}>Delete all posts</button>
        {message && !showRegistration && <span className="account-saved-message">{message}</span>}
      </div>
    </section>
  )
}

export default AccountPage
