export const useDateRange = (starting: string, ending: string): string => {
    const startingDate = new Date(starting)
    const endingDate = new Date(ending)
    const startingMonthYear = startingDate.toLocaleString('default', { month: 'long' }) + ' ' + startingDate.getFullYear()
    const endingMonthYear = endingDate.toLocaleString('default', { month: 'long' }) + ' ' + endingDate.getFullYear()

    return startingMonthYear + ' to ' + endingMonthYear
}