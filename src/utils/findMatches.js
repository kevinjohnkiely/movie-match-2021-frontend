const findMatches = (myLikesArray, allLikesObj) => {

    const resultArray = []
    
    allLikesObj.forEach(likeObj => {

        const theObj = {}

        let counter = 0
        myLikesArray.forEach(like => {
            
            if(likeObj.likes.includes(like)) {
                counter++
                theObj.name = likeObj.name
                theObj.amt = counter
            }
        })
        if(Object.keys(theObj).length > 0) {
            resultArray.push(theObj)
        }
        
    });

    resultArray.sort((a, b) => parseFloat(b.amt) - parseFloat(a.amt));

    return resultArray
    
}

export default findMatches