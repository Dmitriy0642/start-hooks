import React from "react";
import Component from "./someComponent";
import SimpleComponent from "../../exercises/simpleComponent";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import withLogin from "./withLogin";
import WithProps from "./withProps";
import withFunctions from "./withFunctions";

const HOCExample = () => {
    const ComponentWithAuth = withLogin(Component);
    const ComponentWithPropsSyles = WithProps(Component);
    const NewComponent = WithProps(ComponentWithAuth);
    const ComponentWithFunc = withFunctions(SimpleComponent);
    return (
        <>
            <CardWrapper>
                <SmallTitle>1. Обычный компонент</SmallTitle>
                <Divider />
                <Component />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>2. Функциональный HOC</SmallTitle>
                <Divider />
                <ComponentWithAuth />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>3. HOC With Styles and Props</SmallTitle>
                <ComponentWithPropsSyles />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>4. Composed HOC</SmallTitle>
                <NewComponent />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Дз</SmallTitle>
                <Divider />
                <ComponentWithFunc />
            </CardWrapper>
        </>
    );
};

export default HOCExample;
