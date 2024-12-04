import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'

// Đăng ký các phần tử cần thiết cho biểu đồ tròn
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

const UsersPlatformChart = () => {
  // Dữ liệu giả định cho người dùng trên các nền tảng
  const data = {
    labels: ['Shopee', 'Lazada', 'Tiki', 'Sendo'],
    datasets: [
      {
        label: 'Người dùng theo nền tảng',
        data: [400, 500, 300, 200], // Giả định số người dùng trên từng nền tảng
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)', 
          'rgba(53, 162, 235, 0.2)', 
          'rgba(255, 205, 86, 0.2)', 
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', 
          'rgba(53, 162, 235, 1)', 
          'rgba(255, 205, 86, 1)', 
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="w-14 h-14">  {/* Cài đặt chiều rộng và chiều cao cho container */}
      <h3>Người dùng và nền tảng</h3>
      <Pie data={data}  /> {/* Dùng 'maintainAspectRatio' để giữ tỷ lệ trong phần container */}
    </div>
  )
}

export default UsersPlatformChart
