const filterSearch = (search) => {

    const filteredSearchInput = {};

    if(search.stage) {
        filteredSearchInput.stage = search.stage;
    }

    if(search.level) {
        filteredSearchInput.level = search.level;
    }

    if(search.full_name) {
        filteredSearchInput.full_name = search.full_name;
    }

    if(search.parent_info !== undefined) {
        
        if(search.parent_info.full_name) {
            filteredSearchInput["parent_info.full_name"] = search.parent_info.full_name;
        }

        if(search.parent_info.phone) {
            filteredSearchInput["parent_info.phone"] = search.parent_info.phone;
        }
        
        if(search.parent_info.national_id) {
            filteredSearchInput["parent_info.national_id"] = search.parent_info.national_id;
        }
    }

    return filteredSearchInput;
}

module.exports = filterSearch;