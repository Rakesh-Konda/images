// Write your code here
import './index.css'

const AppItem = props => {
  const {AppList} = props
  return (
    <ul className="ul">
      {AppList.map(each => (
        <li key={each.appId} className="hlo">
          <img className="img" src={each.imageUrl} alt={each.appName} />
          <p>{each.appName}</p>
        </li>
      ))}
    </ul>
  )
}

export default AppItem
