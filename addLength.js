function addLength(str) {
    let abc = str.split(' ')
    let result = []
    for (let i = 0; i<abc.length; i++){
        // for (let j = 0; j<str[i].length; i++){
            if (abc[i].length > 0){
                result.push(`${abc[i] + ' ' + abc[i].length}` )

                
            
            }
        }
    return result
    }
  
    console.log(addLength('apple ban'))