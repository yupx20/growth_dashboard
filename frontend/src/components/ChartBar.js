import React, { useEffect, useRef } from 'react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Card } from 'react-bootstrap';
import '../styling/ChartBar.css';

// Register the required components
Chart.register(BarController, BarElement, CategoryScale, LinearScale);

export default function ChartBar() {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = document.getElementById('bar-chart').getContext('2d');
        const config = {
            type: 'bar',
            data: {
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                ],
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: '#03a9f4',
                        borderColor: '#03a9f4',
                        data: [30, 78, 56, 34, 100, 45, 13],
                        fill: false,
                        barThickness: 8,
                    },
                    {
                        label: new Date().getFullYear() - 1,
                        fill: false,
                        backgroundColor: '#f44336',
                        borderColor: '#f44336',
                        data: [27, 68, 86, 74, 10, 4, 87],
                        barThickness: 8,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: 'Orders Chart',
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true,
                },
                legend: {
                    labels: {
                        fontColor: 'rgba(17,17,17,.7)',
                    },
                    align: 'end',
                    position: 'bottom',
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month',
                            },
                            gridLines: {
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: 'rgba(33, 37, 41, 0.3)',
                                zeroLineColor: 'rgba(33, 37, 41, 0.3)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Value',
                            },
                            gridLines: {
                                borderDash: [2],
                                drawBorder: false,
                                borderDashOffset: [2],
                                color: 'rgba(33, 37, 41, 0.2)',
                                zeroLineColor: 'rgba(33, 37, 41, 0.15)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };

        // Create the chart and store its instance
        const chartInstance = new Chart(ctx, config);
        chartRef.current = chartInstance;

        // Cleanup function to destroy the chart instance
        return () => {
            chartInstance.destroy();
        };
    }, []);

    return (
        <Card className="chart-card">
            <Card.Header className="bg-pink text-white">
                <h6 className="text-uppercase text-light text-xs font-medium mb-1">
                    Overview
                </h6>
                <h2 className="text-white text-2xl">Sales value</h2>
            </Card.Header>
            <Card.Body>
                <div className="chart-container">
                    <canvas id="bar-chart"></canvas>
                </div>
            </Card.Body>
        </Card>
    );
}
