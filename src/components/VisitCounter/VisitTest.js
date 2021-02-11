

const VisitCounter = ({ visitCount }) => {
    const paddingZeros = '0'.repeat(6 - visitCount.toString().length)
    const visitCountText = `${paddingZeros}${visitCount}`
  
    return (
      
        visitCountText
         
        
      
    )
  }
  export default VisitCounter