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

    this.state = {
      bold: false
    };
  }

  onItemHover () {
    this.setState ({
      bold: !this.state.bold
    });
  }

  render (){

    var style = {
      fontWeight: this.state.bold ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseOver={this.onItemHover.bind(this)} onMouseLeave={this.onItemHover.bind(this)}>{this.props.item}</li>
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