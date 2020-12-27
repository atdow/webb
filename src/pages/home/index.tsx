import * as React from "react";
class Home extends React.PureComponent {
    public componentDidMount() {
        console.log("componentDidMount");
    }
    public render() {
        return <h2>home</h2>;
    }
}

export default Home;
