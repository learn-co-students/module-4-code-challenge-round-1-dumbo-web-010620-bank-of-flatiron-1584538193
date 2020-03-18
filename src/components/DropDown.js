import React, { Component } from 'react'

class DropDown extends Component {

    handleChangeCategory = (e) => {
        console.log(e.target.value)
        this.props.handleCategory(this.props.filterTerm)
    }

    render() {
        // console.log(this.handleChangeCategory)
        return(
            <select>
                <option value="All">All</option>
                <option value="description" >Sort Description</option>
                <option value="category" onChange={this.handleChangeCategory} >Sort Category</option>
            </select>
        )
    }
}

export default DropDown