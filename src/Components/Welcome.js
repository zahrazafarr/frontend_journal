
const Welcome = () => {



return (        
        <>
        {/* // Header */}
                <p>Hello, and Welcome to Carely</p> 

        {/* // Intro paragraph */}
                    <p>Use this tool to put your thoughts into words and reflect on where you've been.  </p>
        {/* // Carousel */}

                <div className= 'quotes'>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">

                            <div className="carousel-item active">
                                <img src ='https://hips.hearstapps.com/hmg-prod/images/mental-health-quotes-brene-brown-1651243007.jpg?resize=980:*'/>
                                </div>

                                <div className="carousel-item">
                                    <img src ='https://hips.hearstapps.com/hmg-prod/images/mental-health-quotes-noam-shpancer-1651243006.jpg?resize=980:*'/>
                                </div>

                                <div className="carousel-item">
                                <img src ='https://hips.hearstapps.com/hmg-prod/images/mental-health-quotes-john-green-1651243007.jpg?resize=980:*'/>
                                </div>

                                <div className="carousel-item">
                                <img src ='https://hips.hearstapps.com/hmg-prod/images/mental-health-quotes-molly-bahr-1651243009.jpg?resize=980:*'/>
                                </div>

                                <div className="carousel-item">
                                <img src ='https://hips.hearstapps.com/hmg-prod/images/mental-health-quotes-cammie-mcgovern-1651243006.jpg?resize=980:*'/>
                                </div>   

                                <div className="carousel-item">
                                <img src ='https://hips.hearstapps.com/hmg-prod/images/mental-health-quotes-matt-haig-1651243010.jpg?resize=980:*'/>
                                </div>                                        

                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                            </ol>
                        </div>
                    <button className="button">Click here for a New Entry in the Journal</button>
                </div>

        </>
    )
}


export default Welcome;