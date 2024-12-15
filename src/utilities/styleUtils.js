export const getDepartmentClass = (department) => {
    switch (department) {
        case "ICT":
            return "ict";
        case "Finance":
            return "finance";
        case "Marketing":
            return "marketing";
        default:
            return "default";
    }
};