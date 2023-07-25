import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function BarGraph({
    data,
    width = 640,
    height = 400,
    marginTop = 20,
    marginRight = 20,
    marginBottom = 20,
    marginLeft = 20,
}) {
    const svgRef = useRef(null);

    useEffect(() => {
        // Declare the x (horizontal position) scale.
        const x = d3.scaleBand()
            .domain(d3.groupSort(data, ([d]) => d[1], (d) => d[0]))
            .range([marginLeft, width - marginRight])
            .padding(0.1);

        // Declare the y (vertical position) scale.
        const y = d3.scaleLinear()
            .domain([0, d3.max(data, (d) => d[1])])
            .range([height - marginBottom, marginTop]);

        // Create the SVG container.
        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [0, 0, width, height])
            .attr("style", "max-width: 100%; height: auto;");

        // Add a rect for each bar.
        svg.append("g")
            .attr("class", "bar")
            .attr("fill", "steelblue")
            .selectAll()
            .data(data)
            .join("rect")
            .attr("x", (d) => x(d[0]))
            .attr("y", (d) => y(d[1]))
            .attr("height", (d) => y(0) - y(d[1]))
            .attr("width", x.bandwidth());

        // Add the x-axis and label.
        svg.append("g")
            .attr("id", "x-axis")
            .attr("transform", `translate(0,${height - marginBottom})`)
            .call(d3.axisBottom(x).tickSizeOuter(0));

        // Add the y-axis and label, and remove the domain line.
        svg.append("g")
            .attr("id", "y-axis")
            .attr("transform", `translate(${marginLeft},0)`)
            .call(d3.axisLeft(y).tickFormat((y) => (y * 100).toFixed()))
            .call(g => g.select(".domain").remove())
            .call(g => g.append("text")
                .attr("x", -marginLeft)
                .attr("y", 10)
                .attr("fill", "currentColor")
                .attr("text-anchor", "start")
                .text("Gross Demestic Product"));

    }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft]);
    console.log(data)
    return (
        <svg ref={svgRef} width={width} height={height}>
        </svg>
    );
}
