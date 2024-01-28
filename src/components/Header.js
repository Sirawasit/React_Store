import React, {Component}from "react";
import {Link} from "react-router-dom";
class Header extends Component{
    constructor(proop){
        super(proop);
        this.state = {date :new Date()};
       // setInterval(() => this.tick(), 1000);
       
    }
    componentDidMount(){
        this.timeID = setInterval(()=> this.tick(),1000);
    }
    componentDidUpdate(){
        //console.log('componentDidupdate')
    }
    conmponentWillUnmount(){
        clearInterval(this.timeID);
    }

    tick(){
        this.setState({date : new Date()});
    }

    render(){
        return (
        <div  className="GeeksForGeeks">
        <div className="container-fluid bg-warning">
            <div className="row">
                <div className="col-md-8 text-left">
                    <h1 className="text-success"><img style={{height : 70}} src="/images/logo/logo.png"alt=""/>เคยู คาเฟ่ </h1>
                </div>
                <div className="col-md-4 text-right">
                <h5 className="text-dark mt-5">{this.state.date.toLocaleTimeString()}</h5>

                  <ul className="list-inline">
                    <li className="list-inline-item title"> <Link className="text-dark" to="/"> หน้าหลัก</Link></li>
                    <li className="list-inline-item title">|</li>
                    <li className="list-inline-item title"><Link className="text-dark" to="/orders"> รายการสั่งซื้อ</Link></li>
                    <li className="list-inline-item title">|</li>
                    <li className="list-inline-item title"><Link className="text-dark" to="/products">สินค้า</Link></li>
                    <li className="list-inline-item title">|</li>
                    <li className="list-inline-item title"><Link className="text-dark" to="/about">เกี่ยวกับ</Link></li>
                  </ul>
                
                </div>
            </div>
         </div>
        
        </div>)
    }
}


export default Header;