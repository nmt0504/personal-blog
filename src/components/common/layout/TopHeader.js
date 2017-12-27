import React from 'react';
import { Link } from 'react-router-dom';

class TopHeader extends React.Component {
    render() {
        return (
            <div className="top_header_area">
                <div className="container">
                    <div className="row">
                        <div className="col-5 col-sm-6">
                            <div className="top_social_bar">
                                <a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href=""><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                <a href=""><i className="fa fa-skype" aria-hidden="true"></i></a>
                                <a href=""><i className="fa fa-dribbble" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="col-7 col-sm-6">
                            <div className="signup-search-area d-flex align-items-center justify-content-end">
                                <div className="login_register_area d-flex">
                                    <div className="login">
                                        <Link to="/login">Sign in</Link>
                                    </div>
                                    <div className="register">
                                        <Link to="/register">Sign up</Link>
                                    </div>
                                </div>
                                <div className="search_button">
                                    <a className="searchBtn" href="#"><i className="fa fa-search" aria-hidden="true"></i></a>
                                </div>
                                {/*<div className="search-hidden-form">*/}
                                    {/*<form action="#" method="get">*/}
                                        {/*<input type="search" name="search" id="search-anything" placeholder="Search Anything..."/>*/}
                                            {/*<input type="submit" value="" className="d-none" />*/}
                                                {/*<span className="searchBtn"><i className="fa fa-times" aria-hidden="true"></i></span>*/}
                                    {/*</form>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopHeader;