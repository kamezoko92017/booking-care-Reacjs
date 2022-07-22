import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'


class About extends Component {


    render() {


        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/rc9JGx-671c"
                            title="THƠ TÌNH CỦA NÚI - TÂN NHÀN FT TUẤN ANH [BẢN GỐC]"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>

                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p>lsakdjflk;dsajf;kladsjf;klasjdf;kladsjfklajnwepio foinvf;asfawefadshfoeso</p>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
