async function fetchData() {
    console.log('network call')
    // const response = await fetch("usGDP.json");
    const response = await fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json");
    const barData = await response.json();
    return barData;
}

export default fetchData;
