const username = document.getElementById('name')
const data1 = document.getElementById('note1')
const data2 = document.getElementById('note2')
const data3 = document.getElementById('note3')
const calculate = document.getElementById('btn-calculate')
const predict = document.getElementById('predict')
const respon = document.getElementById('result')

calculate.addEventListener('click', calculateNote)

function calculateNote () {
    let user = username.Value
    let not1 = Number(data1.value)
    let not2 = Number(data2.value)
    let not3 = Number(data3.value)
    let result = (not1 * 0.3) + (not2 * 0.3) + (not3 * 0.4)
    //result.textContent = `sr(a)(e)(i) ${user}, su nota es de: ${result}`

    if (result < 3.5) {
        respon.textContent = `sr(a)(e)(i) ${user}, su nota es de: ${result}. perdiste la materia`
        respon.style.color = 'black'; 
    } else if (result >= 3.5 && result <= 4.5) {
        respon.textContent = `sr(a)(e)(i) ${user}, su nota es de: ${result}. ganaste la materia`
        respon.style.color = 'orange'; 
    } else if (result > 4.5) {
        respon.textContent = `sr(a)(e)(i) ${user}, su nota es de: ${result}. tu nota es sobresaliente`
        respon.style.color = 'green'; 
    }

}
calculateNote()