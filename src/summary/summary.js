import React, { Component } from 'react';
import SummaryTotal from './../summary-total/summaryTotal'

class Summary extends Component {
	render () {
		const summary = Object.keys(this.props.selected)
    	.map(key => <div className="summary__option" key={key}>
        <div className="summary__option__label">{key}  </div>
        <div className="summary__option__value">{this.props.selected[key].name}</div>
        <div className="summary__option__cost">
            { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            	.format(this.props.selected[key].cost) }
        </div>
			</div>)
		return (
			<section className ="main_summary">
				<h3>NEW GREENLEAF 2018</h3>
				{summary}
				<SummaryTotal 
				selected= {this.props.selected}/>
			</section>
		)
	}
}

export default Summary
