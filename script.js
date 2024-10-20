console.log('working for tabl');

const printBtn = document.querySelector('#print-btn');

printBtn.addEventListener('click', () => {
    const tableOutputBox = document.querySelector('#table-output');
    
    // taking  user input values
    const num = document.querySelectorAll('input[type="number"]')[0].value;
    const commonNumLength = document.querySelectorAll('input[type="number"]')[1].value;
    
    if(!num ){
        alert('Please define your table first ! ')
    }

    console.log(num);
    console.log(commonNumLength);
    
    // create  new div for  table
    const tableBox = document.createElement('div');
    tableBox.classList.add('table-box'); 

    // gnrt table inside new div

    for (let i = 1; i <= commonNumLength; i++) {
        const tableLine = document.createElement('p');
        tableLine.innerText = `${num} * ${i} = ${num * i}`;
        tableBox.appendChild(tableLine);
    }
    
    // apnd the new div to the tableOutputBox
    tableOutputBox.appendChild(tableBox);
});

document.querySelector('#rest-btn').addEventListener('click', ()=>{
    
    window.location.reload()
    alert('Your definitions were cleared ! ')
    
})

// animated scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((ele) => observer.observe(ele));


document.querySelector('.i-button').addEventListener('click', ()=>{
    document.querySelector('.pop-up').classList.toggle('open')
})
document.querySelector('.pop-up-close-btn').addEventListener( 'click' , ()=>{
    document.querySelector('.pop-up').classList.remove('open')
} )