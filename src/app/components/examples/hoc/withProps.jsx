import React from "react";
import CardWrapper from "../../common/Card";

const WithProps = (Component) => (props) => {
    return (
        <CardWrapper>
            <Component {...props} name="new Name" />
        </CardWrapper>
    );
};

export default WithProps;
