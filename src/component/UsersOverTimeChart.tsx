import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'

// Đăng ký tất cả các thành phần cần thiết
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

const UsersOverTimeChart = () => {
  // Dữ liệu giả định cho người dùng theo thời gian trong 12 tháng
  const data = {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: [
      {
        label: 'Số người dùng',
        data: [50, 70, 120, 150, 180, 200, 250, 300, 350, 400, 450, 500], // Giả định số người dùng theo tháng
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  }

  return (
    <div>
      <h3>Người dùng theo thời gian (12 tháng)</h3>
      <Line data={data} />
    </div>
  )
}

export default UsersOverTimeChart
