async function fetchExchangeCourse() {
    try {
        const response = await fetch('https://belarusbank.by/api/kursExchange');

        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.error();
    }
}

fetchExchangeCourse();