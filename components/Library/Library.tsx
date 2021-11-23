import LibItem from '../LibItem/LibItem'
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
        <LibItem
          id={item.id}
          type={item.type}
          variety={item.variety}
          key={item.id}
        />
      ))}
    </div>
  )
}

export default Library
