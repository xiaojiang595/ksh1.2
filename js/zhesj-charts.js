// 智算能力提升行动 - 图表初始化脚本

// 切换标签页功能
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

// 初始化所有图表
document.addEventListener('DOMContentLoaded', function() {
    // 1. 算力规模增长趋势图（条形图）
    const computePowerCtx = document.getElementById('computePowerChart').getContext('2d');
    new Chart(computePowerCtx, {
        type: 'bar',
        data: {
            labels: ['2025年', '2026年', '2027年'],
            datasets: [{
                label: '算力规模 (Eflops)',
                data: [150, 180, 210],
                backgroundColor: function(context) {
                    const chart = context.chart;
                    const {ctx, chartArea} = chart;
                    if (!chartArea) return null;
                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                    gradient.addColorStop(0, 'rgba(26, 95, 180, 0.7)');
                    gradient.addColorStop(1, 'rgba(41, 128, 185, 1)');
                    return gradient;
                },
                borderColor: 'rgba(26, 95, 180, 1)',
                borderWidth: 1,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', labels: { font: { size: 14, weight: 'bold' }, color: '#1a5fb4' } },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `算力规模: ${context.parsed.y} Eflops`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: '算力规模 (Eflops)', font: { size: 14, weight: 'bold' }, color: '#1a5fb4' }
                }
            }
        }
    });
    
    // 2. 投资额与产业规模发展（双折线图）
    const investmentCtx = document.getElementById('investmentChart').getContext('2d');
    new Chart(investmentCtx, {
        type: 'line',
        data: {
            labels: ['2025年', '2026年', '2027年'],
            datasets: [
                {
                    label: '年度投资额(亿元)',
                    data: [130, 150, 180],
                    borderColor: '#1e5799',
                    backgroundColor: 'rgba(30, 87, 153, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.3
                },
                {
                    label: 'AI核心产业规模(亿元)',
                    data: [240, 290, 350],
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: '金额(亿元)' }
                }
            }
        }
    });

    // 3. 数据集与应用场景增长（柱状图）
    const datasetCtx = document.getElementById('datasetChart').getContext('2d');
    new Chart(datasetCtx, {
        type: 'bar',
        data: {
            labels: ['2025年', '2026年', '2027年'],
            datasets: [
                {
                    label: '高质量数据集(个)',
                    data: [10, 30, 50],
                    backgroundColor: 'rgba(46, 204, 113, 0.7)',
                    borderColor: 'rgba(46, 204, 113, 1)',
                    borderWidth: 1
                },
                {
                    label: '大模型应用场景(个)',
                    data: [100, 200, 500],
                    backgroundColor: 'rgba(155, 89, 182, 0.7)',
                    borderColor: 'rgba(155, 89, 182, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, title: { display: true, text: '数量' } }
            }
        }
    });
    
    // 4. 算力规模快速增长趋势（折线图）
    const currentPowerCtx = document.getElementById('currentPowerChart').getContext('2d');
    new Chart(currentPowerCtx, {
        type: 'line',
        data: {
            labels: ['2024年底', '2025年8月', '2025年目标', '2026年目标', '2027年目标'],
            datasets: [{
                label: '算力规模 (Eflops)',
                data: [57, 85, 150, 180, 210],
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.3,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `算力: ${context.parsed.y} Eflops`;
                        }
                    }
                }
            },
            scales: {
                y: { beginAtZero: true, title: { display: true, text: '算力规模 (Eflops)' } }
            }
        }
    });
    
    // 5. 网络时延雷达图
    const networkCtx = document.getElementById('networkChart').getContext('2d');
    new Chart(networkCtx, {
        type: 'radar',
        data: {
            labels: ['集群内', '成渝地区', '深圳', '长三角', '京津冀'],
            datasets: [{
                label: '网络时延(ms)',
                data: [3, 10, 10, 20, 20],
                backgroundColor: 'rgba(41, 128, 185, 0.2)',
                borderColor: 'rgba(41, 128, 185, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(41, 128, 185, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 25,
                    ticks: { stepSize: 5 }
                }
            }
        }
    });
    
    // 6. 主要城市网络时延对比（水平条形图）
    const latencyCtx = document.getElementById('latencyChart').getContext('2d');
    new Chart(latencyCtx, {
        type: 'bar',
        data: {
            labels: ['集群内', '成都', '重庆', '深圳', '广州', '杭州', '北京'],
            datasets: [{
                label: '网络时延(ms)',
                data: [3, 10, 10, 10, 10, 16, 20],
                backgroundColor: [
                    'rgba(46, 204, 113, 0.8)',
                    'rgba(52, 152, 219, 0.8)',
                    'rgba(52, 152, 219, 0.8)',
                    'rgba(52, 152, 219, 0.8)',
                    'rgba(52, 152, 219, 0.8)',
                    'rgba(241, 196, 15, 0.8)',
                    'rgba(231, 76, 60, 0.8)'
                ],
                borderColor: [
                    'rgba(46, 204, 113, 1)',
                    'rgba(52, 152, 219, 1)',
                    'rgba(52, 152, 219, 1)',
                    'rgba(52, 152, 219, 1)',
                    'rgba(52, 152, 219, 1)',
                    'rgba(241, 196, 15, 1)',
                    'rgba(231, 76, 60, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { beginAtZero: true, title: { display: true, text: '时延(ms)' } }
            }
        }
    });
    
    // 7. 应用行业分布（环形图）
    const industryCtx = document.getElementById('industryChart').getContext('2d');
    new Chart(industryCtx, {
        type: 'doughnut',
        data: {
            labels: ['影视文创', '工业制造', '医疗健康', '文旅服务', '煤矿安全', '酱酒产业', '政务服务', '其他'],
            datasets: [{
                data: [15, 18, 12, 10, 12, 10, 8, 15],
                backgroundColor: [
                    'rgba(231, 76, 60, 0.8)',
                    'rgba(52, 152, 219, 0.8)',
                    'rgba(46, 204, 113, 0.8)',
                    'rgba(241, 196, 15, 0.8)',
                    'rgba(155, 89, 182, 0.8)',
                    'rgba(230, 126, 34, 0.8)',
                    'rgba(26, 188, 156, 0.8)',
                    'rgba(149, 165, 166, 0.8)'
                ],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'right' },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.parsed}%`;
                        }
                    }
                }
            }
        }
    });
    
    // 8. 影视渲染服务作品数量（柱状图）
    const movieCtx = document.getElementById('movieChart').getContext('2d');
    new Chart(movieCtx, {
        type: 'bar',
        data: {
            labels: ['2022年', '2023年', '2024年', '2025年(预计)'],
            datasets: [{
                label: '服务影片数量(部)',
                data: [80, 110, 150, 180],
                backgroundColor: 'rgba(155, 89, 182, 0.7)',
                borderColor: 'rgba(155, 89, 182, 1)',
                borderWidth: 1,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, title: { display: true, text: '影片数量(部)' } }
            }
        }
    });
    
    // 9. 数据交易市场增长（面积图）
    const dataMarketCtx = document.getElementById('dataMarketChart').getContext('2d');
    new Chart(dataMarketCtx, {
        type: 'line',
        data: {
            labels: ['2022年', '2023年', '2024年', '2025年上半年'],
            datasets: [
                {
                    label: '累计交易额(亿元)',
                    data: [20, 35, 55, 60],
                    borderColor: '#27ae60',
                    backgroundColor: 'rgba(39, 174, 96, 0.2)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.3
                },
                {
                    label: '经营主体(家)',
                    data: [500, 750, 1100, 1150],
                    borderColor: '#e67e22',
                    backgroundColor: 'rgba(230, 126, 34, 0.2)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.3,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: { display: true, text: '交易额(亿元)' }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: { display: true, text: '经营主体(家)' },
                    grid: { drawOnChartArea: false }
                }
            }
        }
    });
    
    // 10. 投资与产业规模趋势（组合图）
    const economyCtx = document.getElementById('economyChart').getContext('2d');
    new Chart(economyCtx, {
        type: 'bar',
        data: {
            labels: ['2025年', '2026年', '2027年'],
            datasets: [
                {
                    label: '智算投资额(亿元)',
                    data: [130, 150, 180],
                    backgroundColor: 'rgba(52, 152, 219, 0.7)',
                    borderColor: 'rgba(52, 152, 219, 1)',
                    borderWidth: 1,
                    type: 'bar'
                },
                {
                    label: '算力产业规模(亿元)',
                    data: [120, 140, 170],
                    backgroundColor: 'rgba(46, 204, 113, 0.7)',
                    borderColor: 'rgba(46, 204, 113, 1)',
                    borderWidth: 1,
                    type: 'bar'
                },
                {
                    label: 'AI核心产业规模(亿元)',
                    data: [240, 290, 350],
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.3,
                    type: 'line'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, title: { display: true, text: '金额(亿元)' } }
            }
        }
    });
    
    // 11. 数字经济占GDP比重（折线图）
    const gdpCtx = document.getElementById('gdpChart').getContext('2d');
    new Chart(gdpCtx, {
        type: 'line',
        data: {
            labels: ['2022年', '2023年', '2024年', '2025年(预计)', '2026年(预计)', '2027年(预计)'],
            datasets: [{
                label: '信息技术服务业占GDP比重(%)',
                data: [2.3, 2.5, 2.7, 2.9, 3.1, 3.3],
                borderColor: '#9b59b6',
                backgroundColor: 'rgba(155, 89, 182, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.3,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, max: 4, title: { display: true, text: '占比(%)' } }
            }
        }
    });
    
    // 12. 算力交易额增长（柱状图）
    const transactionCtx = document.getElementById('transactionChart').getContext('2d');
    new Chart(transactionCtx, {
        type: 'bar',
        data: {
            labels: ['2022年', '2023年', '2024年', '2025年(预计)'],
            datasets: [{
                label: '算力交易额(亿元)',
                data: [35, 68, 113.51, 150],
                backgroundColor: function(context) {
                    const value = context.parsed.y;
                    if (value < 50) return 'rgba(241, 196, 15, 0.7)';
                    if (value < 100) return 'rgba(52, 152, 219, 0.7)';
                    return 'rgba(46, 204, 113, 0.7)';
                },
                borderColor: function(context) {
                    const value = context.parsed.y;
                    if (value < 50) return 'rgba(241, 196, 15, 1)';
                    if (value < 100) return 'rgba(52, 152, 219, 1)';
                    return 'rgba(46, 204, 113, 1)';
                },
                borderWidth: 1,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `交易额: ${context.parsed.y} 亿元`;
                        },
                        afterLabel: function(context) {
                            const index = context.dataIndex;
                            if (index > 0) {
                                const prev = context.dataset.data[index - 1];
                                const current = context.dataset.data[index];
                                const growth = ((current - prev) / prev * 100).toFixed(1);
                                return `同比增长: ${growth}%`;
                            }
                            return '';
                        }
                    }
                }
            },
            scales: {
                y: { beginAtZero: true, title: { display: true, text: '交易额(亿元)' } }
            }
        }
    });
});
