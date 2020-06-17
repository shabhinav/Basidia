import React,{Component} from 'react';
import './Home.scss';
import axios from 'axios'

class Home extends Component{
    constructor(props){
        super(props)
        this.searchInput=React.createRef()
    }
    state={
        statewisedetail:[],
        searchedResult:[]
    }

    checkdata=(data)=>{
        if(data.state.toUpperCase()===this.searchInput.current.value.toUpperCase()){
            return data
        }
    }

    searchedDataHandler=(e)=>{
        e.preventDefault()
        if(this.searchInput.current.value.length===0){
            this.setState({
                searchedResult:this.state.statewisedetail,
                
            })
        }
        else{
            this.setState({
                searchedResult:this.state.statewisedetail.filter(this.checkdata)
            })
        }

    }

    async componentDidMount(){
        let data=await axios.get(`https://v2-api.sheety.co/31d49b429d3ad399e6379557f1c13976/stateWiseData/stateWiseData`)
        await this.setState({
            statewisedetail:data.data.stateWiseData,
            searchedResult:data.data.stateWiseData
        })
    }

    render() {
        return (
            <div className='Home container'>
                <div>
                    <form onSubmit={this.searchedDataHandler}>
                        <input type='text' className='inputsearch shadow' ref={this.searchInput} onChange={this.searchedDataHandler}/>
                    </form>
                </div>

                <table className="table table-hover table-bordered">
                        <thead>
                        <tr>
                            <th>State/UI</th>
                            <th>Confirmed</th>
                            <th>Active</th>
                            <th>Recovered</th>
                            <th>Deceased</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.searchedResult.map(detail=>
                            <tr key={detail.id} style={{fontWeight:'800'}}>
                                <td>{detail.state}</td>
                                <td>{detail.confirmed}</td>
                                <td>{detail.active}</td>
                                <td style={{color:'#4CAF50'}}>{detail.recovered}</td>
                                <td style={{color:'red'}}>{detail.deaths}</td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home