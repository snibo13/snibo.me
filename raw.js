let heights = [];
//600, 
let elementIds = [];
let currentIndx = -1;
let shrunken_height = "10vh";
let expanded_height = "30vh";
window.onload = (event) => {
    let section_boxes = Array.prototype.slice.call(document.getElementsByClassName("section-content"))
    let adjustment = document.getElementById("masthead").offsetHeight + 50;
    section_boxes.forEach((element, index) => {
        // console.log(index);
        // if (index > 0) {
        //     console.log("Element height " + element.offsetHeight.toString())
        //     console.log("Previous height " + heights.at(index - 1))
        //     let totalHeight = 1.5 * element.offsetHeight + heights.at(index - 1) + adjustment;
        //     console.log("Total scroll " + totalHeight);
        //     heights.push(totalHeight)
        // } else {
        //     heights.push(element.offsetHeight);
        // }
        elementIds.push(element.getAttribute("data-section-box"));
    });

    // heights.unshift(0) // Prepend a zero
    // heights.pop() // Remove the last element
    heights = [adjustment, 1500];
    // console.log(heights)
    // console.log(elementIds)
};
window.onscroll = (event) => {
    // console.log(window.scrollY);
    let indx = 0;
    let minDistance = 1 / 0;
    // console.log(minDistance);
    for (let i = 0; i < heights.length; i++) {
        distance = Math.abs(window.scrollY - heights[i]);
        if (window.scrollY > heights[i]) {
            minDistance = distance;
            indx = i;
        }
    }
    if (indx != currentIndx) {
        // console.log(currentIndx)
        if (currentIndx != -1) {
            console.log("Current index " + currentIndx.toString());
            document.getElementById(elementIds[currentIndx]).style.height = "10vh";
        }
        // console.log(elementIds[indx]);
        currentIndx = indx;
        document.getElementById(elementIds[indx]).style.height = "30vh";
    }

}