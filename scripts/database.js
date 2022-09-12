const database = {
    paints: [
        {id: 1, color: 'Silver', price: 400},
        {id: 2, color: 'Midnight Blue', price: 1000},
        {id: 3, color: 'FireBrick Red', price: 600},
        {id: 4, color: 'Spring Green', price: 700}
    ],
    interiors: [
        {id: 1, material: 'Beige Fabric', price: 1500},
        {id: 2, material: 'Charcoal Fabric', price: 2000},
        {id: 3, material: 'White Leather', price: 5000},
        {id: 4, material: 'Black Leather', price: 5000}
    ],
    technologies: [
        {id: 1, package: 'Basic Package', packageNotes: 'basic sound system', price: 400},
        {id: 2, package: 'Navigation Package', packageNotes: 'includes integrated navigation controls', price: 1000},
        {id: 3, package: 'Visibility Package', packageNotes: 'includes side and reat cameras', price: 600},
        {id: 4, package: 'Ultra Package', packageNotes: 'includes navigation and visibility packages', price: 700}
    ],
    wheels: [
        {id: 1, type: '17-inch Pair Radial', price: 400},
        {id: 2, type: '17-inch Pair Radial Black', price: 600},
        {id: 3, type: '18-inch Pair Spoke Silver', price: 500},
        {id: 4, type: '18-inch Pair Spoke Black', price: 800}
    ],
    customOrders: [
        {id: 1, paintId: 2, interiorId: 3, techId: 1, wheelsId: 4, timestamp: 16895837301},
        {id: 2, paintId: 2, interiorId: 3, techId: 1, wheelsId: 4, timestamp: 16895837301}
    ],
    orderBuilder: {}
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id;
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id;
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id;
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id;
}

export const addOrder = () => {
    const newOrder = {...database.orderBuilder};
    const lastIndex = database.customOrders.length - 1;
    newOrder.id = database.customOrders[lastIndex].id + 1;
    newOrder.timestamp = Date.now();
    database.customOrders.push(newOrder);
    database.orderBuilder = {};
    document.dispatchEvent(new CustomEvent("stateChanged"));
}