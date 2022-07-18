import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import logo from '../../assets/logo.svg'
import { FormattedMessage } from 'react-intl'
import { Form } from 'reactstrap';

class HomeHeader extends Component {

    render() {


        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <img className='header-logo' src={logo} />
                            {/* <div className='header-logo'></div> */}
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.speciality" /></b></div>
                                <div className='subs-title'><FormattedMessage id="home-header.search-doctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.health-facility" /></b></div>
                                <div className='subs-title'><FormattedMessage id="home-header.select-room" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.doctor" /></b></div>
                                <div className='subs-title'><FormattedMessage id="home-header.select-doctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.fee" /></b></div>
                                <div className='subs-title'><FormattedMessage id="home-header.check-health" /></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'><i className="fas fa-question-circle"></i><FormattedMessage id="home-header.support" /></div>
                            <div className='language-vi'>VN</div>
                            <div className='language-en'>EN</div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'><FormattedMessage id="banner.title1" /></div>
                        <div className='title2'><FormattedMessage id="banner.title2" /></div>
                        <div className='search'>
                            <i class="fas fa-search"></i>
                            <input type='text' />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child'><i class="fas fa-hospital"></i></div>
                                <div className='text-child'>Khám chuyên khoa</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i class="fas fa-hospital"></i></div>
                                <div className='text-child'>Khám từ xa</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i class="fas fa-hospital"></i></div>
                                <div className='text-child'>Khám tổng quát</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i class="fas fa-hospital"></i></div>
                                <div className='text-child'>Xét nghiệm y học</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i class="fas fa-hospital"></i></div>
                                <div className='text-child'>Sức khỏe tinh thần</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i class="fas fa-hospital"></i></div>
                                <div className='text-child'>Khám nha khoa</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
