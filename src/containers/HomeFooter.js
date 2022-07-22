import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'


class HomeFooter extends Component {


    render() {


        return (
            <div className='home-footer'>
                <p>&copy; 2022 Nguyen Hai.More information
                    <a target='_blank' href='http://hainguyen.com'>
                        &#8594; Click here &#8592;
                    </a>
                </p>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
