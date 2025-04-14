function ticket(arrOfData, sortCriteria) {
    const list = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price); 
            this.status = status;
        }

        static sort(arr, sortCriteria) {
            return arr.sort((a, b) => {
                if (sortCriteria === "price") {
                    return a.price - b.price; 
                } else {
                    return a[sortCriteria].localeCompare(b[sortCriteria]); 
                }
            });
        }
    }

    for (let el of arrOfData) {
        const [destination, price, status] = el.split("|");
        list.push(new Ticket(destination, price, status));
    }

    return Ticket.sort(list, sortCriteria);
}
