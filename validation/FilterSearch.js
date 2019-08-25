const FilterSearch = (search) => {

    const filteredSearchInput = {};

    if(search.stage !== undefined) {
        filteredSearchInput.stage = search.stage;
    }

    if(search.level !== undefined) {
        filteredSearchInput.level = search.level;
    }

    if(search.full_name !== undefined) {
        filteredSearchInput.full_name = search.full_name;
    }

    if(search.parent_info !== undefined) {
    
        if(search.parent_info.phone !== undefined) {
            filteredSearchInput['parent_info.phone'] = search.parent_info.phone;
        }
        
        if(search.parent_info.national_id !== undefined) {
            filteredSearchInput['parent_info.national_id'] = search.parent_info.national_id;
        }
    }

    return filteredSearchInput;
}

module.exports = FilterSearch;