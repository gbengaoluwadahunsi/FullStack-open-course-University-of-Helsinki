




const DisplayInfo = ({info, weather}) => {

  
  return (
    <>

        <section className='display-content'>

            <section>
                    <h2 style={{color: "#030313"}} className="country-name">{info.name.common}</h2>

                    <section className='info'>

                        <section className='capital'>
                            <span style={{fontWeight: "bold"}}>capital</span> <span style={{marginLeft: "1.7em"}}>{info.capital}</span>
                            <section style={{padding: "0.4em 0"}}>
                            <span style={{fontWeight: "600"}}>area</span> <span style={{marginLeft: "3em"}}>{info.area}</span>
                             </section>
                             <span style={{fontWeight: "bold"}}>region</span> <span style={{marginLeft: "1.8em"}}>{info.region}</span>
                        </section>

                        <section className="timezone">
                        <h4 style={{color: "#030313"}}>time zone(s):</h4>
                        <section className= "time" style={{marginTop: "0.5em",  fontSize:" 1.5em "}}>
                            {info.timezones.map((time , index) => (<h6 key={index}>{time}</h6>))}
                        </section>

                        </section>
                        


                        <section className="languages">
                            <h4 style={{color: "#030313"}}>language(s):</h4>

                                <ul>
                                    {Object.values(info.languages).map((language, index) => (<li key={index}>{language}</li> ))}
                                </ul>
                        </section>

                        <section className="flag-section">
                            <h4 style={{color: "#030313"}}>country flag</h4>
                                <div><img src= {info.flags.png}  className='country-flag' loading='lazy'/></div>
                        </section>

                    </section>
            </section>

           
                 
                <section className='weather'>
                    <h4 style={{ color: '#030313' }}>Current Weather</h4>
                    <section style={{margin: " 0.8em 0" }}>
                        <span style={{ fontWeight: 'bold' }}>Local Time</span>
                        <span style={{marginLeft: " 0.8em" }}>{weather.location?.localtime}</span>
                     </section>

                        {weather.current ? (
                        <>
                            <h1 style={{ fontWeight: 'bold' }}>Temperature</h1>
                            <h1 style={{ color: '#8a113c', fontSize: '2em' }}>
                            {`${weather.current.temp_c} °C`}
                            </h1>

                            <span style={{ fontWeight: 'bold' }}>Humidity</span>
                            <span style={{marginLeft: " 0.2em"}}>{weather.current.humidity}%</span>

                            <span style={{ fontWeight: 'bold', marginLeft: '0.8em' }} className="wind-speed">Wind Speed</span>
                            <span style={{marginLeft: " 0.2em"}}>{weather.current.wind_kph} km/h</span>

                            {/* Display weather condition icon */}
                            <img
                            src={`https:${weather.current.condition.icon}`}
                            alt={weather.current.condition.text}
                            />
                        </>
                        ) : (
                        <p>loading ....</p>
                        )}
                     <div className="coats-section"><img src={info.coatOfArms.png} alt="" width={500}  height={500} className="coatOfArms" style={{marginTop: "2em"}}/></div>
                </section>

        </section>

           
       
    </>
  )
}

export default DisplayInfo
