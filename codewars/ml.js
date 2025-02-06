function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        let foundMatch = false;  // متغير للتحقق إذا كان هناك تطابق

        // نبحث عن عكس العنصر الحالي في بقية المصفوفة
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === -(arr[j])) {  // التأكد من أن العنصرين عكس بعضهما
                foundMatch = true;
                break;  // التوقف عند العثور على تطابق
            }
        }

        // إذا لم يتم العثور على تطابق، نرجع الرقم الحالي مباشرة
        if (!foundMatch) {
            return arr[i];
        }
    }

    return null; // إذا لم نجد أي رقم لا يطابق، نرجع null
}

console.log(solve([1, -1, 2, -2, 3, 3]));  // النتيجة ستكون: 3
console.log(solve([3, 1, 2, 4, -1, -4, -2]));  // النتيجة ستكون: 3
