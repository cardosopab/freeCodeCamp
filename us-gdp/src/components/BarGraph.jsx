import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function BarGraph({
    data,
    width = 640,
    height = 400,
    marginTop = 20,
    marginRight = 30,
    marginBottom = 50,
    marginLeft = 60,
}) {
    const svgRef = useRef(null);
    const barWidth = (width - marginRight - marginLeft) / data.length;

    useEffect(() => {
        let tooltip = d3
            .select('.modalContainer')
            .append('div')
            .attr('id', 'tooltip')
            .style('opacity', 0);

        let modal = d3
            .select('.modalContainer')
            .append('div')
            .attr('class', 'modal')
            .style('opacity', 0);
        let years = data.map(function (item) {
            let quarter;
            let temp = item[0].substring(5, 7);

            if (temp === '01') {
                quarter = 'Q1';
            } else if (temp === '04') {
                quarter = 'Q2';
            } else if (temp === '07') {
                quarter = 'Q3';
            } else if (temp === '10') {
                quarter = 'Q4';
            }

            return item[0].substring(0, 4) + ' ' + quarter;
        });

        let GDP = data.map(function (item) {
            return item[1];
        });

        const yearsDate = data.map(function (item) {
            return new Date(item[0]);
        });

        const xMax = new Date(d3.max(yearsDate));
        xMax.setMonth(xMax.getMonth() + 3);

        // Declare the x (horizontal position) scale.
        const x = d3.scaleTime()
            .domain([d3.min(yearsDate), xMax])
            .range([marginLeft, width - marginRight])

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
            .attr("fill", "steelblue")
            .selectAll()
            .data(data)
            .join("rect")
            .attr("class", "bar")
            .attr("data-date", (d) => d[0])
            .attr("data-gdp", (d) => d[1])
            .attr('x', (d, i) => i * barWidth)
            .attr("y", (d) => y(d[1]))
            .attr("height", (d) => y(0) - y(d[1]))
            .attr("width", barWidth)
            .attr('transform', `translate(${marginLeft},${0})`)
            .on('mouseover', function (event, d) {
                console.log(event.target.getBoundingClientRect().left)
                console.log(event.pageX)
                // console.log('GDP', GDP[i], 'years', years[i], 'data-date', data[i][0])
                console.log('tooltip', document.querySelector('#tooltip'))
                let i = data.indexOf(d);
                modal
                    .transition()
                    .duration(0)
                    .style('height', d + 'px')
                    .style('width', barWidth + 'px')
                    .style('opacity', 0.9)
                    .style('left', i * barWidth + 'px')
                    .style('top', height - d + 'px')
                // .style('transform', 'translateX(0px)');
                tooltip.transition().duration(200).style('opacity', 0.9);
                tooltip
                    .html(
                        years[i] +
                        '<br>' +
                        '$' +
                        GDP[i].toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') +
                        ' Billion'
                    )
                    .attr('data-date', data[i][0])
                    // .style('left', i * barWidth - 70 + 'px')
                    .style('left', event.clientX + 'px')
                    .style('top', height - 100 + 'px')
                // .style('transform', `translateX(-${barWidth}px)`);
            })
            .on('mouseout', function () {
                tooltip.transition().duration(200).style('opacity', 0);
                modal.transition().duration(200).style('opacity', 0);
            });

        // Add the x-axis and label.
        svg.append("g")
            .attr("id", "x-axis")
            .attr("transform", `translate(0,${height - marginBottom})`)
            .call(d3.axisBottom().scale(x))
            .selectAll('text')
            .style('text-anchor', 'start')
            .attr('transform', 'rotate(90)')

        // Add the y-axis and label, and remove the domain line.
        svg.append("g")
            .attr("id", "y-axis")
            .attr("transform", `translate(${marginLeft},0)`)
            .call(d3.axisLeft(y).tickFormat((y) => y))
            .call(g => g.select(".domain").remove())
            .call(g => g.append("text")
                .attr("fill", "currentColor")
                .attr("text-anchor", "start")
                .text("Gross Domestic Product")
                .style('font-size', '1.5em')
                .attr('transform', 'rotate(-90)')
                .attr('x', -(height / 2) - marginTop)
                .attr('y', marginLeft / 2)

            )

    }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, barWidth,]);
    return (<>
        <div className="modalContainer"></div>
        <svg ref={svgRef} width={width} height={height}></svg>
    </>
    );
}
