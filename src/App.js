
export default function App() {
  return `
    <h1>窗簾尺寸換算器</h1>
    <form id="form">
      <input type="text" id="customer" placeholder="客戶名稱" required />
      <input type="number" id="width" placeholder="寬 (cm)" required />
      <input type="number" id="height" placeholder="高 (cm)" required />
      <button type="submit">加入</button>
    </form>
    <table>
      <thead>
        <tr>
          <th>客戶名稱</th>
          <th>寬 (cm/尺)</th>
          <th>高 (cm/尺)</th>
          <th>坪數</th>
        </tr>
      </thead>
      <tbody id="record-body"></tbody>
    </table>
  `
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form')
  const body = document.getElementById('record-body')

  form.addEventListener('submit', e => {
    e.preventDefault()
    const customer = document.getElementById('customer').value
    const width = parseFloat(document.getElementById('width').value)
    const height = parseFloat(document.getElementById('height').value)
    const widthChi = Math.round(width / 30.3 * 10) / 10
    const heightChi = Math.round(height / 30.3 * 10) / 10
    const area = Math.round((width * height / 10000) * 0.3025 * 10) / 10

    const row = document.createElement('tr')
    row.innerHTML = `
      <td>${customer}</td>
      <td>${width} / ${widthChi}</td>
      <td>${height} / ${heightChi}</td>
      <td>${area}</td>
    `
    body.appendChild(row)
    form.reset()
  })
})
