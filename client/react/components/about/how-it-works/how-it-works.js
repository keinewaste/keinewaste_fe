import React from 'react';
import './how-it-works.scss';

const images = {
    liza: require('client/assets/images/liza.png'),
    sebastian: require('client/assets/images/sebastian.png'),
    magic: require('client/assets/images/magic.png')
}
const HowItWorks = React.createClass({
    propTypes: {},
    render() {
        return (
            <div className="how-it-works">
                <div className="content">
                    <h2>How it works</h2>
                    <div className="liza description">
                        <img className="user-logo" src={images.liza} />
                        <div className="messages">
                            <div className="message">
                                This is Lisa.<br />
                                Lisa owns a small organic bar in Kreuzberg<br />
                                At the end of the day, she looks at the fresh salad boxes that are left unsold. What to do
                                with them?<br />
                            </div>
                        </div>
                    </div>
                    <div className="sebastian description">
                        <div className="messages">
                            <div className="message">
                                This is Sebastian.<br />
                                Sebastian volunteers in a food association in Kreuzberg.
                            </div>
                            <div className="message">
                                Sebastian created a volunteer account on KeineWaste, specifying that his association is
                                interested in vegetarian food and he is willing to collect food with his bike.
                            </div>
                        </div>
                        <img className="user-logo" src={images.sebastian} />
                    </div>
                    <div className="liza description">
                        <img className="user-logo" src={images.liza} />
                        <div className="messages">
                            <div className="message">
                                Lisa also joined KeineWaste and she now lists her leftovers on the donors platform.
                            </div>
                        </div>
                    </div>

                    <div className="magic description">
                        <img src={images.magic} />
                    </div>

                    <div className="together description">
                        <div className="messages">
                            <div className="message">
                                The smart algorithm do the magic and in just one click she is already connected with Sebastian.<br/><br/>
                                Sebastian gets a notification for the positive match with Lisa and they live-chat to organize the delivery.
                            </div>
                        </div>
                        <div className="user-logos">
                            <img className="user-logo" src={images.liza} />
                            <img className="user-logo" src={images.sebastian} />
                        </div>
                    </div>

                    <div className="result description">
                        <div className="messages">
                            <div className="liza message">
                                Lisa doesn't waste food anymore. All her leftovers are distributed through KeineWaste to people in need.<br/><br/>
                                She feels good. Because she IS good.
                            </div>
                            <div className="sebastian message">
                                Thanks to KeineWaste, Sebastian has now access to thousands of small businesses in his area, leveraging the number of people he can feed per day.
                            </div>
                        </div>


                    </div>


                </div>
            </div>
        );
    }
});

export default HowItWorks;
