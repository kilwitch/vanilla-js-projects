transactionFormEl.addEventListener("submit", addTransaction);

function addTransaction(e){
    e.preventDefault();

    const desc=descriptionEl.value.trim();
    const amount=parseFloat(amountEl.value);

    transactions.push({
        id:Date.now(),
        desc,
        amount
    })

    localStorage.setItem("transactions",JSON.stringify(transactions))

    updateTransactionList();
    updateSummary();
}

function updateTransactionList(){
    transactionListEl.innerHTML=""

    const sortedTransactions=[...transactions].reverse()

    sortedTransactions.forEach((transactions)=>{
        const transactionEl=createTransactionElement(transactions)
        transactionListEl.appendChild(transactionEl)
    })
}


function createTransactionElement(transaction){
    const li=document.createElement("li")
    li.classList.add("transaction")
    li.classList.add(transaction.amount>0 ?"income":"expenses")

    li.innerHTML=`
    <span>${transaction.desc}</span>
    <span>${transaction.amount}
    <button class="delete-btn" onclick="remove(${transaction.id})>x</button>
    </span>
    `
    return li;
}

function updateSummary(){
    const balance=transactions.reduce((acc,transactions)=>acc+transactions,0)

    const income=transactions.filter(transactions=>transactions.amount>0)
    .reduce((acc,transactions)=> acc+transaction.amount,0)

    const expense=transactions.filter(transactions=> transactions.amount<0)
    .reduce((acc,transactions)=> acc+transactions.amount,0)


    balanceEl.textContent=formatCurrency(balance)
    incomeAmountEl.textContent=formatCurrency(income)
    expenseAmountEl.textContent=formatCurrency(expense)
}

function formatCurrency(number){

    return new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD",
    }).format(number)
}

function remove(){
    transactions=transactions.filter(transactions=>transactions.id !=id)

    localStorage.setItem("transactions", JSON.stringify(transactions))
}