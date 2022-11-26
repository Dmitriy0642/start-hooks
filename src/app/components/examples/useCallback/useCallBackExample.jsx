import React, { useState, useEffect, useRef, useCallback } from "react";

import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const validateWithoutCallback = (data) => {
        console.log(data);
    };
    const withCallBack = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        validateWithoutCallback(data);
        withCallBack(data);
    }, [data]);
    useEffect(() => {
        withOutCallback.current++;
    }, [validateWithoutCallback]);
    useEffect(() => {
        withCallback.current++;
    }, [withCallback]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render Without CallBack:{withOutCallback.current}</p>
            <p>Rener withCallback:{withCallback.current}</p>
            <label htmlFor="email" className="form-label"></label>
            <input
                type="email"
                className="form-control"
                id="email"
                value={data.email || ""}
                name="email"
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
