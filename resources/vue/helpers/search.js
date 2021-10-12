export function getResourcesWithString(resources, searchString){

    if (searchString !== ''){
        return resources.filter(resource => {
            return (
                resource.title.includes(searchString)   || 
                resource.type.includes(searchString)    ||
                resource.link?.includes(searchString)
            )
        })
    }
    return resources;
}

export function getResourcesByTypes(resources, activeFilters){
    return resources.filter(resource => {
        return activeFilters.includes(resource.type)
    })
}