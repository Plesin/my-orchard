import LibItem from '../LibItem/LibItem'
import classes from './Library.module.css'

const items = [
  { id: '1', type: 'Apple', variety: 'Topas', left: 0, top: 0 },
  {
    id: '2',
    type: 'Appricot',
    variety: 'Velkopavlovicka',
    left: 0,
    top: 0,
  },
  { id: '3', type: 'Pear', variety: 'Williams', left: 0, top: 0 },
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
          left={item.left}
          top={item.top}
          mouseOffset={{ x: item.left, y: item.top }}
        />
      ))}
    </div>
  )
}

export default Library
