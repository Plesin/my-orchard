import { FunctionComponent } from 'react'
import classes from './Library.module.css'

const items = [
  { id: '1', type: 'Apple', variety: 'Topas' },
  { id: '2', type: 'Appricot', variety: 'Velkopavlovicka' },
  { id: '3', type: 'Pear', variety: 'Williams' },
]

function Library() {
  return (
    <div className={classes.flex}>
      {items.map((item) => (
        <div key={item.id} className={classes.plant}>
          <p>
            <h1>{item.type}</h1>
            <span>{item.variety}</span>
          </p>
        </div>
      ))}
    </div>
  )
}

export default Library
