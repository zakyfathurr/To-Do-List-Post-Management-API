
const validateBody = (body) => {
    const requiredFields = ['title', 'brand','platform','description','due_date','payment','status']
    const missingFields = {}
    requiredFields.forEach((field) =>{
        if (!body[field]) {
            missingFields[field] = "missing"
        }
    })
    return  Object.keys(missingFields).length>0? missingFields : null

}

module.exports = validateBody