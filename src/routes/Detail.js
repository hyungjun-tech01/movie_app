import React from "react"
// react route dom v6에서는 더이상 Link to 를 통해 state/props 전달은 할 수 없다. 따라서 아래 기능은 동작하지 않는다. 
// custom hook 을 만들어서 사용하라고 되어 있는데 , hook 은 아직 공부 못했다. 다음에 공부하게 되면 추가할 예정 
class Detail extends React.Component{ 
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined )
            history.push("/");
    }
    render(){
        return <span> Hello</span>
    }

}
export default Detail;