function slove(first, second, third) {

    let totalLength = 0;
    totalLength += first.length;
    totalLength += second.length;
    totalLength += third.length;
    console.log(totalLength);

    const avgLength = Math.floor(totalLength/3);
    console.log(avgLength);
    
}
slove('chocolate', 'ice cream', 'cake');