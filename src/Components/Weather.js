import React,{Component} from 'react'
import './Weather.scss';
import {connect} from 'react-redux';
import * as actionCreators from '../Store/actions/index'

class Weather extends Component{

    render() {
        const currentTemp=Math.round(this.props.climateData.temp-273);
        const maxTemp=Math.round(this.props.climateData.temp_max-273);
        const minTemp=Math.round(this.props.climateData.temp_min-273)
        return (
            <div className='Weather'>
                <div className='citybtn'>
                        <select className='btn btn-warning p-3'  onChange={(e)=>this.props.cityData(e.target.value)}>
                            <option className='menu'>Select City</option>
                            <option value='Delhi' className='menu'>Delhi</option>
                            <option value='Mumbai' className='menu'>Mumbai</option>
                            <option value='Bangalore' className='menu'>Bangalore</option>
                            <option value='Hyderabad' className='menu'>Hyderabad</option>
                            <option value='Kolkata' className='menu'>Kolkata</option>
                            <option value='Surat' className='menu'>Surat</option>
                            <option value='Jammu' className='menu'>Jammu</option>
                        </select>   
                </div>
                <div className='outputdata'>
                    <div className='item'>
                        <h1>Temp</h1>
                        <h1 className='currentWeather'><strong>{isNaN(currentTemp)?'N/a':currentTemp}</strong></h1>
                    </div>
                    <div className='item'>
                        <h1>Max Temp</h1>
                        <h1 className='currentWeather'><strong>{isNaN(maxTemp)?'N/a':maxTemp}</strong></h1>
                    </div>
                    <div className='item'>
                        <h1>Min Temp</h1>
                        <h1 className='currentWeather'><strong>{isNaN(minTemp)?'N/A':minTemp}</strong></h1>
                    </div>
                    <div className='item'>
                        <h1>Humidity</h1>
                        <h1 className='currentWeather'><strong>{this.props.climateData.humidity||'N/A'}</strong></h1>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        climateData:state.weatherdata
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        cityData:(weatherData)=>dispatch(actionCreators.weatherData(weatherData))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Weather)