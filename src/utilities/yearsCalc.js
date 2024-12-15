export function calcYearsWorked(startDate) {
    const today = new Date();
    const start = new Date(startDate);

    let years = today.getFullYear() - start.getFullYear();

    if (
        today.getMonth() < start.getMonth() ||
        (today.getMonth() === start.getMonth() && today.getDate() < start.getDate())
    ) {
        years -= 1;
    }

    return years;
}
