import * as XLSX from "xlsx"

// https://github.com/liyutg/sheetjs-docs-zh-cn
export function exportTableToExcel(el: any, filename: string) {
  const workbook = XLSX.utils.table_to_book(el, { raw: true }) // raw true 保留原始数据
  XLSX.writeFile(workbook, filename, {
    bookType: "xlsx", // 导出的文件类型
    bookSST: false,
    type: "array"
  })
}
