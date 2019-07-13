import React from "react";
import './sh-soochi.css';
import { fbind } from "q";

export class ShSoochi extends React.Component {

    props: any;
    constructor(props: any) {
        super(props);
        console.log(props);
        this.props = props;


    }

    render() {
        return (<p>I am sh soochi {this.props.name}</p>);
    }



}