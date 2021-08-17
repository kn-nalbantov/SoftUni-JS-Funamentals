function vacation(num, groupType, day) {
    let result;
    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            if (groupType === 'Students') {
                result = num * 8.45;
            } else if (groupType === 'Business') {
                if (groupType === 'Business' && num >= 100) num -= 10;
                result = num * 10.9;
            } else if (groupType === 'Regular') {
                result = num * 15;
            }
            break;
        case 'Saturday':
            if (groupType === 'Students') {
                result = num * 9.8;
            } else if (groupType === 'Business') {
                if (groupType === 'Business' && num >= 100) num -= 10;
                result = num * 15.6;
            } else if (groupType === 'Regular') {
                result = num * 20;
            }
            break;
        case 'Sunday':
            if (groupType === 'Students') {
                result = num * 10.46;
            } else if (groupType === 'Business') {
                if (groupType === 'Business' && num >= 100) num -= 10;
                result = num * 16;
            } else if (groupType === 'Regular') {
                result = num * 22.5;
            }
            break;
    }
    if (groupType === 'Students' && num >= 30) result *= 0.85;
    if (groupType === 'Regular' && num >= 10 && num <= 20) result *= 0.95;

    console.log(`Total price: ${result.toFixed(2)}`);
}