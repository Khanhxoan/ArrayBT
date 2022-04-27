/* Ex1: Trả về 1 mảng gồm các phần tử giống nhau trong 2 mảng
        let arr1 = [1,2,3,4,5,6];
        let arr2 = [3,4,8,9,12];
        // ý tưởng: dùng 2 vòng for of để lấy lần lượt các phần tử mảng 1 so sánh với mảng 2
        var arr3 = []
        for(let num1 of arr1) {
            for(let num2 of arr2) {
                if(num2 === num1) {
                    arr3.push(num1);
                }
            }
        }
        console.log(arr3)
*/



//  Ex2: tìm 2 phần tử có tổng lớn nhất trong 1 mảng rồi trả về mảng
        // let array2 = [1,7,9,2,5,3,8]

        // array2.sort(function(a, b){return b - a});
        // let result = array2[0] + array2[1];
        // console.log(result);





/* Ex3: Tìm các cặp phần tử có tổng bằng 1 số cho trước
        let array3 = [1,7,9,2,5,3,8];
        let sum = 10;

        // ý tưởng: sử dụng 2 vòng lặp cộng từng phần tử, cặp nào = sum thì in ra
        for(let i = 0; i < array3.length ; i++) {
            for(let j = i+1; j < array3.length; j++) {
                let result = array3[i] + array3[j];
                if(result == 10) {
                    console.log([array3[i], array3[j]])
                }
            }
        }
*/
/* Ex4: Lấy ra 1 mảng mới từ mảng cho trước sao cho các phần tử chỉ xuất hiện 1 lần (sử dụng Set)
        // Set trong Javascript là một loại object cho phép bạn lưu trữ dữ liệu một cách duy nhất, không trùng lặp.

        let array4 = [1,2,3,1,2,3,4,5,6,4]

        let newObject = new Set(array4); // tạo ra 1 object gồm các value ko trùng lặp
        console.log(newObject);// Set(6) {1, 2, 3, 4, 5, …}
        let newArray = [...newObject];
        console.log(newArray);// [1, 2, 3, 4, 5, 6]
*/



/*  Ex5: Lấy ra 1 mảng mới gồm các phần tử trùng nhau trong 2 mảng, mỗi phần tử xuất hiện đúng 1 lần ở mảng mới
        const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
        const arr2 = [3, 5, 9, 10, 88];
        let newArray1 = [...(new Set(arr1))];
        let newArray2 = [...(new Set(arr2))];
        let arr = []

        for (let value1 of newArray1) {
            for (let value2 of newArray2) {
                if(value1 === value2) {
                    arr.push(value1);
                }
            }
        }
        console.log(arr); // [3, 5, 9]
*/




// Ex6: Từ ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'] trả về object {'face': 2, 'zalo': 3, 'gmail':1}
        // var array = ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo']
        // var object = array.reduce(function(result, value, index) {
        //     result[value] = (result[value] || 0) + 1; // Nếu trùng thì trả về value của result[value] và cộng thêm 1, không trùng thì = 0+1
        //     return result
        // },{})
        // console.log(object);




// Ex7:
        let array =
        [{ make: 'audi', model: 'r8', year: '2012' }, { make: 'audi', model: 'rs5', year: '2013' }, { make: 'ford', model: 'mustang', year: '2012' }, { make: 'ford', model: 'fusion', year: '2015' }, { make: 'kia', model: 'optima', year: '2012' }]
        var object = array.reduce(function(result, car) {
            result[car.make] = car
            return result
        }, {})

        console.log(object);

        // Vấn đề: bị đè value



/* EX8:
        const order = {
            cart: [
            { id: 1, name: "ao dai", amount: 5, price: 100000 },
            { id: 2, name: "ao coc", amount: 2, price: 200000 },
            { id: 3, name: "quan dai", amount: 3, price: 150000 },
            { id: 4, name: "quan coc", amount: 4, price: 130000 },
            ],
            total_money: 0,
            total_amount: 0,
        };

        var arr = order['cart'];
        console.log(arr)
        var total_amount = order['total_amount'];
        var total_money = order['total_money'];

        object = arr.reduce(function(result, item, index, arr) {
            total_amount += item.amount;
            total_money += item.price*item.amount;
            return result = {
                'total_amount': total_amount,
                'total_money': total_money
            };
        }, {})
        console.log(object);// {total_amount: 14, total_money: 1870000}
*/


// myForEach: 
        // Array.prototype.myForEach = function(callback) {
        //     for (let index in this) {
        //         if(this.hasOwnProperty(index)) {
        //             callback(this[index], index);
        //         }
        //     }
        // }; // dùng hasOwnProperty(index) để loại bỏ property ko phải là phần tử của mảng

        // // ví dụ: 
        // let array = [1, 2, 4, 5, 6]
        // array.myForEach(function(num, i) {
        //     console.log(num);
        // });


// myMap:
        // Array.prototype.myMap = function(callbak) {
        //     let arr = []
        //     for(let i in this) {
        //         if(this.hasOwnProperty(i)){
        //             var result = callbak(this[i], i, this)
        //             arr.push(result);
        //         }
        //     }
        //     return arr
        // }

        // // ví dụ: 
        // let arr1 = [5, 6, 12, 16, 0, 2];
        // var a = arr1.myMap(function(num, index, arr) {
        //     return `num ${index}: ${num}`
        // })

        // console.log(a);//['num 0: 5', 'num 1: 6', 'num 2: 12', 'num 3: 16', 'num 4: 0', 'num 5: 2']

// myReduce:
        // Array.prototype.myReduce = function(callback, acc) {
        //             let i = 0;
        //             if(arguments.length < 2) {
        //                 acc = this[0];
        //             };
        //             for(;i < this.length; i++) { 
        //                 if(this.hasOwnProperty(i)){
        //                     acc = callback(acc, this[i], i, this)
        //                 }
        //             }
        //             return acc;
        //         }
        // // ví dụ;
        // let arr = [1, 2, 4, 5, 6, 7];

        // let result = arr.myReduce(function(acc, value) {
        //     return acc += value;
        // }, 3)
        // console.log(result);

