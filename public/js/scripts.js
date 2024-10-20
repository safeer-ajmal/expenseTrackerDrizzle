document.getElementById('expense-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const expenseData = Object.fromEntries(formData.entries());

    const response = await fetch('/api/expenses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(expenseData),
    });

    if (response.ok) {
        // Handle success (e.g., update the expense list)
        console.log('Expense added successfully!');
    } else {
        // Handle error
        console.error('Error adding expense');
    }
});
