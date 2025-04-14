class SnowSportStore {
    constructor(storeName) {
        this.storeName = storeName;
        this.availableEquipment = [];
        this.revenue = 0;
    }

    addEquipment(type, price, condition) {
        if (!type || typeof type !== 'string' || !condition || typeof condition !== 'string' || typeof price !== 'number' || price <= 0) {
            throw new Error("Invalid equipment details!");
        }

        const formattedPrice = parseFloat(price.toFixed(2));
        this.availableEquipment.push({ type, price: formattedPrice, condition });

        return `New equipment added: ${type} / ${condition} condition - ${formattedPrice.toFixed(2)}$.`;
    }

    rentEquipment(type, rentalDays) {
        const equipmentIndex = this.availableEquipment.findIndex(el => el.type === type && el.condition === 'used');
        if (equipmentIndex === -1) {
            throw new Error(`${type} is not available for rent!`);
        }

        const [rentedItem] = this.availableEquipment.splice(equipmentIndex, 1);
        const rentCost = parseFloat((rentedItem.price * 0.1 * rentalDays).toFixed(2));
        this.revenue += rentCost;

        return `${type} rented for ${rentalDays} days. Total cost: ${rentCost.toFixed(2)}$.`;
    }

    sellEquipment(type) {
        const equipmentIndex = this.availableEquipment.findIndex(el => el.type === type && el.condition === 'new');
        if (equipmentIndex === -1) {
            throw new Error(`${type} is not available for purchase!`);
        }

        const [soldItem] = this.availableEquipment.splice(equipmentIndex, 1);
        this.revenue += soldItem.price;

        return `${type} has been sold for ${soldItem.price.toFixed(2)}$.`;
    }

    showRevenue() {
        return this.revenue > 0 
            ? `${this.storeName} has made a total revenue of ${this.revenue.toFixed(2)}$.`
            : "Nothing has been sold or rented.";
    }
}


let store = new SnowSportStore('Alpine Gear Shop');
console.log(store.addEquipment('Ski', 500, 'new'));
console.log(store.addEquipment('Snowboard', 300, 'used'));
console.log(store.addEquipment('Helmet', 50, ''));



