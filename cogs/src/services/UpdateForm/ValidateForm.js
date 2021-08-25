const VerifyForm = (updatedProduct) => {
    const id = VerifyID(updatedProduct._id)
    const name = VerifyName(updatedProduct.productName)
    const country = VerifyManufacturingCountry(updatedProduct.cogs.manufacturingCountry)
    const unitCost = VerifyUnitManufacturingCost(updatedProduct.cogs.unitManufacturingCost)
    const adverCost = VerifyAdvertismentCost(updatedProduct.cogs.monthlyAdvertismentCost)
    const shipCost = VerifyShipmentUnitCost(updatedProduct.cogs.shipmentUnitCost)
    return id && name && country && unitCost && adverCost && shipCost
}

const VerifyID = (id) => {
    return id != "" && typeof id == "string";
}

const VerifyName = (name) => {
    return name != "" && typeof name == "string";
}

const VerifyManufacturingCountry = (country) => {
    return country != "" && typeof country == "string";
}

const VerifyUnitManufacturingCost = (cost) => {
    return cost >= 0 && typeof cost == "number";
}

const VerifyAdvertismentCost = (cost) => {
    return cost >= 0 && typeof cost == "number";
}

const VerifyShipmentUnitCost = (cost) => {
    return cost >= 0 && typeof cost == "number";
}

export default VerifyForm;