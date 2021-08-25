
const VerifyProductDetails = (updatedProduct) => {
    return VerifyID(updatedProduct._id) && VerifyName(updatedProduct.productName)
        && VerifyManufacturingCountry(updatedProduct.cogs.manufacturingCountry)
        && VerifyUnitManufacturingCost(updatedProduct.cogs.unitManufacturingCost)
        && VerifyAdvertismentCost(updatedProduct.cogs.monthlyAdvertismentCost)
        && VerifyShipmentUnitCost(updatedProduct.cogs.shipmentUnitCost)
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

module.exports = VerifyProductDetails