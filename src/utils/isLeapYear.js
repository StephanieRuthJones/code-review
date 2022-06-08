export const isLeapYear = (year) => {
     if (year.charAt(2) == '1' 
        || year.charAt(2) == '3' 
        || year.charAt(2) == 5 
        || year.charAt(2) == '7' 
        || year.charAt(2) == '9') {
        if (year.charAt(3)=='2'||year.charAt(3)=='6') {
            console.log('line 3') 
            return true
        }
        else
            console.log('line 8')
            return false 
    }else{
        if (year.charAt(2) == '0' && year.charAt(3) == '0') {
            return false 
        }
        if (year.charAt(3)=='0'||year.charAt(3)=='4'||year.charAt(3)=='8'){
            console.log("line 14")
            return true }
    }
    return false
}