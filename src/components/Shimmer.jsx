const Shimmer=()=>{
    return <div className="shimmer-container">
        {        [1,2,3,4,5,6,7,8].map((index)=>{
                return <div className="shimmer-card" key={index}>
                    <div className="shimmer-img"></div>
                </div>

})}
    </div>
}
export default Shimmer;