function threeSum(nums: number[]): number[][] {
    const result: Record<string, Array<number>> = {}

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const keys = [nums[i], nums[j], nums[k]]

                const sum = nums[i] + nums[j] + nums[k]
                if (sum === 0) {
                    const numKey = keys.sort((a, b) => a - b).join("+")
                    result[numKey] = [nums[i], nums[j], nums[k]]
                }
            }
        }
    }

    return Object.values(result)
};

function threeSumFaster(nums: number[]): number[][] {
    const result: Map<string, Array<number>> = new Map()
    const sortedNums = nums.sort((a, b) => a - b);
    const comparedRoot: Record<string, boolean> = {}

    for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] > 0) break;
        const root = nums[i].toString()
        if (comparedRoot[root]) continue;
        for (let j = i + 1; j < sortedNums.length; j++) {
            const iNum = sortedNums[i]
            const jNum = sortedNums[j]

            if (iNum + jNum > 0) break;

            for (let k = j + 1; k < sortedNums.length; k++) {
                const kNum = sortedNums[k]

                if (iNum + jNum + kNum > 0) break;

                const sum = iNum + jNum + kNum

                if (sum === 0) {
                    const key = `${iNum}+${jNum}+${kNum}`
                    result.set(key, [iNum, jNum, kNum])
                    break
                }
            }
        }
        comparedRoot[root] = true
    }

    return Array.from(result.values())
}

console.log(threeSumFaster([0, 0, 0]))