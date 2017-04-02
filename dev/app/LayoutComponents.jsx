import React from 'react'

export class SpacingBlock extends React.Component {

    constructor(props){
        super(props);
        this.width = "20px";

        if (props.width)
            this.width = props.width+"px";

    }

    render(){
        return (
            <div style={{width: this.width, display: "inline-block"}}></div>
        );
    }
}