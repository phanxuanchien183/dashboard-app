import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

// Đăng ký các phần tử cần thiết cho biểu đồ cột
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const UsersProductsTimeChart = () => {
  // Dữ liệu giả định cho người dùng, sản phẩm và thời gian (theo từng tháng)
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // Thời gian (từng tháng)
    datasets: [
      {
        label: 'Sản phẩm A',
        data: [120, 150, 180, 200, 230, 250, 300, 320, 350, 400, 450, 500], // Người dùng mua sản phẩm A theo từng tháng
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Màu sắc cho sản phẩm A
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Sản phẩm B',
        data: [100, 130, 160, 180, 200, 220, 270, 300, 330, 370, 400, 450], // Người dùng mua sản phẩm B theo từng tháng
        backgroundColor: 'rgba(53, 162, 235, 0.6)', // Màu sắc cho sản phẩm B
        borderColor: 'rgba(53, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Sản phẩm C',
        data: [80, 110, 140, 170, 190, 210, 260, 290, 320, 360, 390, 440], // Người dùng mua sản phẩm C theo từng tháng
        backgroundColor: 'rgba(255, 205, 86, 0.6)', // Màu sắc cho sản phẩm C
        borderColor: 'rgba(255, 205, 86, 1)',
        borderWidth: 1,
      },
    ],
  }

  return (
    <div>
      <h3>Người dùng, sản phẩm và thời gian</h3>
      <Bar data={data} />
    </div>
  )
}

export default UsersProductsTimeChart
