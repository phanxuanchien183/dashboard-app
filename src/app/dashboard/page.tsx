"use client";

import TableWithSearch from "@/component/TableWithSearch";
import UsersOverTimeChart from "@/component/UsersOverTimeChart";
import UsersPlatformChart from "@/component/UsersPlatformChart";
import UsersProductsTimeChart from "@/component/UsersProductsTimeChart";

interface DataType {
  id: number;
  name: string;
  age: number;
  address: string;
}

const data: DataType[] = [
  { id: 1, name: "John Doe", age: 32, address: "New York" },
  { id: 2, name: "Jane Smith", age: 28, address: "London" },
  { id: 3, name: "Tom Brown", age: 22, address: "San Francisco" },
  { id: 4, name: "Emily White", age: 35, address: "Los Angeles" },
  { id: 5, name: "George Green", age: 42, address: "Chicago" },
  { id: 6, name: "Maria Black", age: 25, address: "Miami" },
  // Thêm dữ liệu vào đây...
];

function Page() {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          Biểu đồ người dùng
        </h1>
        <div className="grid grid-cols-3 gap-8">
          <UsersOverTimeChart />
          <UsersProductsTimeChart />
          <UsersPlatformChart />
        </div>
      </div>

      <TableWithSearch data={data} />
    </div>
  );
}

export default Page;
