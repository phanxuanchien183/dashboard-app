"use client";

import TableWithSearch from "@/component/TableWithSearch";

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
      <TableWithSearch data={data} />
    </div>
  );
}

export default Page;
