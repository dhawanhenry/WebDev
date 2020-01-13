function bottles(){

var count = 99;

    while (count >= 0){
        if(count > 1){
            console.log(count + "bottles");
        } else if (count === 1){
            console.log(count + "bottle");
        } else {
            console.log("no more bottles")
        }
    }

    count--;
}
