import React from 'react';
import './company-description.scss';

const CompanyDescription = React.createClass({
    propTypes: {},
    render() {
        return (
            <div className="company-description">
                <div className="content">
                    <h2>No more waste</h2>
                    <p>Everyday in Berlin thousands of meals are wasted because small businesses and local producers and
                        not able to connect to the food network.</p>
                    <p>KeineWaste aims to solve this terrible problem by connecting food businesses and volunteers in
                        real-time, preventing food waste and boosting food donations.</p>
                </div>
            </div>
        );
    }
});

export default CompanyDescription;
