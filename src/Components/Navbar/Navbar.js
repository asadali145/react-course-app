import React, { Component } from "react";


class navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-success">
                <div className="container-fluid">
                    {/*<img src="https://wallpapercave.com/wp/wc1757036.jpg" width='100px'/>*/}
                    <a className="navbar-brand text-white row">
                        <h1>Change.pk</h1>
                    </a>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={this.props.changed}
                        />
                    </form>
                </div>
            </nav>
        )
    }
}

export default navbar;
