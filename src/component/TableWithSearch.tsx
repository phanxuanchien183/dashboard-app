import React, { useState } from 'react'
import { Table, Input, Button, Space, Pagination } from 'antd'
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons'
import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'

interface DataType {
  id: number
  name: string
  age: number
  address: string
}

interface TableWithSearchProps {
  data: DataType[]
}

const TableWithSearch: React.FC<TableWithSearchProps> = ({ data }) => {
  const [searchText, setSearchText] = useState<string>('')
  const [filteredData, setFilteredData] = useState<DataType[]>(data)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)

  const handleSearch = (value: string) => {
    setSearchText(value)
    const filtered = data.filter((item) =>
      Object.values(item).some((field) =>
        String(field).toLowerCase().includes(value.toLowerCase())
      )
    )
    setFilteredData(filtered)
    setCurrentPage(1) // Reset to first page after search
  }

  const handleExport = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
    const file = new Blob([excelBuffer], { type: 'application/octet-stream' })
    saveAs(file, 'table_data.xlsx')
  }

  const handlePageChange = (page: number, pageSize: number) => {
    setCurrentPage(page)
    setPageSize(pageSize)
  }

  const handleTableChange = (pagination: any, filters: any, sorter: any) => {
    setFilteredData(filteredData)
  }

  const currentPageData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ]

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <Space direction="vertical" className="w-full">
        <div className="flex justify-between items-center mb-4">
          <Input
            placeholder="Search..."
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-1/3"
            prefix={<SearchOutlined />}
          />
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            onClick={handleExport}
          >
            Export to Excel
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={currentPageData}
          pagination={false}
          onChange={handleTableChange}
        />
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredData.length}
          onChange={handlePageChange}
          showSizeChanger
          onShowSizeChange={handlePageChange}
          pageSizeOptions={['5', '10', '20', '50']}
        />
      </Space>
    </div>
  )
}

export default TableWithSearch
