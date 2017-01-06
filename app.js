// TODO
var Item1 = () => (
  <li>milk</li>
);

var Item2 = () => (
  <li>water</li>
);

class GroceryListItem extends React.Component {
  constructor(props){
    super(props);
  }
  render (){
    return (
      <li>{this.props.item}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map((item) => 
      (<GroceryListItem item={item} />)
    )}
  </ul>
);




ReactDOM.render(<GroceryList items={['milk', 'water', 'salt','vegetable','sugar', 'pepper']}/>, document.getElementById('app'));