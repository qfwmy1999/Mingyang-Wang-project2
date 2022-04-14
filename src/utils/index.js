export const getStatus = (guess, solution) => {
    const status = {}
    guess.filter(Boolean).forEach((key, i) => {
        if (status[key] !== 3) {
            const index = solution.findIndex(v => v === key)
            if (index === i) {
                status[key] = 3
            } else if (index > -1) {
                status[key] = 2
            } else {
                status[key] = 1
            }
        }
    })
    return status
}

export const getStatusByPlace = (guess, solution) => {
    const status = []
    for (let i = 0; i < solution.length; i++) {
        if (guess[i] === solution[i]) {
            status[i] = 3
            guess[i] = solution[i] = ''
        }
    }
    const count = {}
    guess.forEach((key, i) => {
        if (!count[key]) count[key] = 0
        if (!key) {
            status[i] = status[i] || 0
        } else {
            if (count[key] < solution.filter(v => v === key).length) {
                const index = solution.findIndex(v => v === key)
                if (index === i) {
                    status[i] = 3
                } else if (index > -1) {
                    status[i] = 2
                } else {
                    status[i] = 1
                }
                count[key]++
            } else {
                status[i] = 1
            }
        }
    })
    return status
}