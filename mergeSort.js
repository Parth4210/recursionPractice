function merge(left, right) {
    const temp = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            temp.push(left[i]);
            i++;
        } else {
            temp.push(right[j]);
            j++;
        }
    }

    return temp.concat(left.slice(i), right.slice(j));
}

function mergeSort(arr, low = 0, high = arr.length - 1) {
    if (low >= high) {
        return arr.slice(low, high + 1);
    }

    const mid = Math.floor((low + high) / 2);
    const left = mergeSort(arr, low, mid);
    const right = mergeSort(arr, mid + 1, high);

    return merge(left, right);
}

module.exports = mergeSort;