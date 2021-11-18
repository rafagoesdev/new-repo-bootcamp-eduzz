import Item from './components/item'
import Card from './components/card'

const App = () => {
  return(
    <>
    <h1>Primeira aplicação React</h1>
    <ul>
    <Item>
        Item 1
      </Item>
      <Item>
        Item 2
      </Item>
      <Item>
        Item 3
      </Item>
    </ul>
    <Card></Card>
    </>
  )
}

export default App