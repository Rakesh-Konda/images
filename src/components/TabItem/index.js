// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, Remain} = props

  const change = tabId => {
    Remain(tabId)
  }

  return (
    <div className="mid">
      <ul className="ull">
        {tabsList.map(each => (
          <li className="lii" key={each.tabId}>
            <button onClick={() => change(each.tabId)}>
              {each.displayText}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default TabItem
