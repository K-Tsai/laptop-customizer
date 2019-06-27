
class summary extends Component {
	render() {	
		const summary = Object.keys(this.state.selected)
    	.map(key => <div className="summary__option" key={key}/>);
			return (
				<section className="main__summary">
				<h3>NEW GREENLEAF 2018</h3>
				{summary}
				
			</section>
			)
	}
}
<div className="summary__option__label">{key}  </div>
            <div className="summary__option__value">{this.state.selected[key].name}</div>
            <div className="summary__option__cost">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(this.state.selected[key].cost) }
            </div>