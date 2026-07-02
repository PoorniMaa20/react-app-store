/*AppItem index.js*/
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl, category} = appDetails

  return (
    
      <li className="app-cart">
        <img src={imageUrl} className="app-image" alt={appName} />
        <p className="app-name">{appName}</p>
      </li>
    
  )
}
export default AppItem

