import React, { Component } from 'react';
import './summary.css';
import summaryTotal from './summaryTotal/summaryTotal'
class summary extends Component {
	render () {
		const summary = Object.keys(this.state.selected)
    	.map(key => <div className="summary__option" key={key}>
        <div className="summary__option__label">{key}  </div>
        <div className="summary__option__value">{this.state.selected[key].name}</div>
        <div className="summary__option__cost">
            { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            	.format(this.state.selected[key].cost) }
        </div>
			</div>)
		return (
			<section className ="main_summary">
				<h3>NEW GREENLEAF 2018</h3>
				{summary}
				<summaryTotal />
			</section>
		)
	}
}

export default summary
