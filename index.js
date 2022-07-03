var isVip = false; 

// toan tu so sanh

console.log( 4 == 4);
console.log(4 != 4);
console.log(5 > 4);
console.log(5 >= 4);
console.log(5 < 4);
console.log(5 <= 4);


console.log(5 === 5);
console.log(5 !== 5);

// toan tu logic , && , ||
console.log(isVip);
console.log(!isVip);
// Dấu Và
console.log(5 < 4 && 2 == 3 && 7 < 8); 
// Dấu hoặc
console.log(5 < 4 || 2==3); 

// mệnh đề IF

// if(biểu thức điều kiện){
//     // code se run khi đúng điều kiện
// } else{
//     // code sẽ run khi sai đk
//     }

var d = 4;
if(d < 0){
    d = -d;
    console.log(d);
} else {
        console.log(d , " đã là số dương");
    }

// Bài 1
/**
 * input : nhập số tiền phải trả
 *          tiền đã thanh toán 1 phần trong tháng
 *          tính tiền phạt chưa thanh toán
 *          lãi xuất 1,5% / tháng
 * 
 * process :
 *      1. lấy input (creditCardBalance,payment)
 *      2. tính tiền nợ = creditCardBalance - payment
 *      3. tính tiền phạt = tiền nợ * 1,5 %
 * 
 * output : penalty
 * 
 * 
 */

var creditCardBalance = 5000000;
var payment = 200000;
var balance = creditCardBalance - payment;
var penalty;
if(balance >= 0){
    penalty = (balance * 1.5)/100 ;  
    console.log("Số tiền phạt là :", penalty);
}else{
    console.log("đã đủ tiền thanh toán");
}

// Bài 2
/**
 * input :  nhập số giờ làm  trong 1 tuần
 *          nhập số tiền 1 giờ
 *          tính tiền OT nếu giờ làm hơn 40h , tính tiền OT hệ số 1,5 của 1h
 *
 *
 * 
 * process :
 *      1. lấy input (workingHours,salaryPerHouse,overTimeHours,
 *                      overTimeSalary,salary)
 *      2. tính lương salary = workingHours * salaryPerHours
 *      3. tính lương nếu có OT = salary + (overTimeHours * 1,5 )
 * 
 * output : salary
 * 
 * 
 */

var workingHours = 45;
var salaryPerHours = 30000 ;
var overTimeHours = workingHours - 40 ;
var overTimeSalary;
var salary = workingHours * salaryPerHours;

if(workingHours > 40){
    overTimeSalary = (overTimeHours * 1.5) + salary ;
    console.log("Số giờ tăng ca là :", overTimeHours);
    console.log("Tổng lương 1 tuần (cộng tăng ca) là : ", overTimeSalary);

}else {
    console.log("Lương 1 tuần là : ",salary);
}

// Bài 3
/**
 * input :  nhập tên ,điểm Toán Lý Hóa
 *          tính điểm trung bình và xếp loại 
 *              giỏi : điểm tb >= 8.5
 *              khá : điểm tb >= 6.5 và < 8.5
 *              tb : điểm tb >=5 và < 6.5
 *              Yếu : điểm tb < 5 
 *
 *
 * 
 * process :
 *      1. lấy input (studentName,mathScore,chemistryScore,physicScore,mediumScore,rank)
 *      2. tính mediumScore = (mathS + chemisS + physicS) / 3
 *      3. xếp hạng dựa theo mediumScore
 * 
 * output : rank
 * 
 * 
 */

var studenName = "Nguyễn Quốc Hoàng Sơn";
var mathScore = 8 ;
var chemistryScore = 9;
var physicScore = 7 ;
var mediumScore = (mathScore + chemistryScore + physicScore) / 3;
var rank;

if(mediumScore >= 8.5){
    rank = "Gioi";
} else if(mediumScore >= 6.5){
    rank = "Khá";
} else if(mediumScore >= 5){
    rank = "Trung Bình";
} else {
    rank = "Yếu";
}

console.log(rank);

// Bài 4
/**
 * input :  nhập tên sản phẩm ,số lượng,đơn giá
 *          tính tiền phải trả 
 *              số lượng < 50  ko giảm (1 đến 49)
 *                       >= 50 <= 100 giảm 8% (50 đến 100)
 *                       > 100 giảm 12% (101 trở lên)
 *
 * 
 * process :
 *      1. lấy input (productName,number,price,total)
 *      2. tính total = number * price
 *      3.  50 đến 100 total = 49 * price + ((number - 49) * price *0.92)
 *          > 100 total = 100 *price + ((number - 100 *) * price * 0.88)     
 * 
 * output : total
 * 
 * 
 */

var productName = "Ice Cream ";
var number = 120;
var price = 5000;
var total;

if(number < 50){
    total = number * price;
} else if(number <=100){
    total = (49 * price) + ((number - 49) * price * 0.92);
} else {
    total = (49 * price) + (100 * price) + ((number - 100) * price * 0.88);
}


console.log("Thành Tiền : ",total);

var month = 1;

/**
 * if month === 1{
 *      console.log("31 ngay")
 * } else if(month === 2) {
 *      console.log("28 ngày")     
 * }
 * 
 * 
 * 
 */

switch(month) {
    case 1:
        console.log("31 ngay");
        break;
    case 2:
        console.log("28 ngay");
        break;
    default :
        console.log("Không hợp lệ");    
}



// HOMEWORK

// Bài 1
/**
 * input :  nhập 3 số nguyên
 *          xuất 3 số theo thứ tự tăng dần
 *
 * 
 * process :
 *      1. lấy input (a,b,c)
 *      2. tính toán :
 *          nếu a < b và a < c => a nhỏ nhất
 *          và nếu b < c => c lớn nhất
 *          xuất a > b > c
 *          
 *           
 * 
 * output : log a,b,c theo thứ tự tăng dần
 * 
 * 
 */

var c = 11;
var b = 24;
var a = 30;


console.log("**HOMEWORK**");
console.log("* Bài 1 : ");
console.log("Số a :",a);
console.log("Số b :",b);
console.log("Số c :",c);

if(a < b && a < c)
{
    if(b < c){
        console.log("3 số thứ tự tăng dần là :", a ,b,c);
    }else{
            console.log("3 số thứ tự tăng dần là :", a ,c,b);
        }
}
if(b < a && b < c)
{
    if(a < c){
        console.log("3 số thứ tự tăng dần là :", b ,a,c);
    }else{
            console.log("3 số thứ tự tăng dần là :", b ,c,a);
        }
}
if(c < a && c < b)
{
    if(a < b){
        console.log("3 số thứ tự tăng dần là :", c ,a,b);
    }else{
            console.log("3 số thứ tự tăng dần là :", c ,b,a);
        }
}

// Bài 2
/**
 * input :  nhập quan hệ thành viên trong gia đình
 *          viết chương trình chào hỏi dựa theo quan hệ 
 *          quan hệ gia đình gồm : bố (B),mẹ(M),anh trai(T),em gái(G)
 *
 * 
 * process :
 *      1. lấy input (relation,"bố" = B,"mẹ" = M,"anh trai" = T,"em gái" = G)
 *      2. tính toán : nếu relation
 *           là "bố" ,xuất "Chào Bố"
 *           là "mẹ" ,xuất "Chào Mẹ"
 *           là "anh trai" ,xuất "Chào Anh Trai"
 *           là "em gái" ,xuất "Chào Em Gái"
 *          
 *           
 * 
 * output : log lời chào hỏi theo quan hệ gia đình
 * 
 * 
 */

var relation = "em gái" ;
var B = "bố";
var M = "mẹ";
var T = "anh trai";
var G = "em gái";


switch(relation){
    case B:
        console.log("Xin Chào Bố");
        break;
    case M:
        console.log("Xin Chào Mẹ");
        break;
    case T:
        console.log("Xin Chào Anh Trai");
        break;
    case G:
        console.log("Xin Chào Em Gái");
        break;
    default:
        console.log("Sai dữ liệu..Xin nhập lại !!");
}


// Bài 3
/**
 * input :  nhập 3 số nguyên
 *          đếm có bao nhiêu số chẵn và lẻ rồi xuất ra
 *          
 *
 * 
 * process :
 *      1. lấy input 3 số a,b,c
 *      2. Xét 3 số : 
 *              nếu a % 2 == 0 => chẵn
 *              nếu b % 2 == 0 => chẵn
 *              nếu c % 2 == 0 => chẵn
 *              ngược lại lẻ     
 *           
 * 
 * output : đếm số chẵn .lẻ và log ra
 * 
 * 
 */

var a,b,c
    a = 1 % 2 ;
    b = 3 % 2 ;
    c = 6 % 2 ;
var tongChan = 0;
var tongLe = 0;

    if(a == 0){
        tongChan += 1;
    }else{
        tongLe += 1;
    }
    if(b == 0){
        tongChan += 1;
    }else{
        tongLe += 1;
    }
    if(c == 0){
        tongChan += 1;
        console.log("Tổng số chẵn là : ",tongChan);
        console.log("Tổng số lẻ là : ",tongLe);
    }else{
        tongLe += 1;
        console.log("Tổng số chẵn là : ",tongChan);
        console.log("Tổng số lẻ là : ",tongLe);
    }


    
// Bài 4
/**
 * input :  nhập 3 cạnh tam giác
 *          cho biết đó là tam giác gì
 *          
 *
 * 
 * process :
 *      1. lấy input 3 cạnh a,b,c
 *      2. Xét 3 cạnh : 
 *        nếu a = b || a = c || b = c => tam giác cân
 *        nếu a = b = c => tam giác đều
 *        nếu a*a = b*b + c*c || b*b = a*a + c*c || c*c = a*a + b*b => tam giác vuông
 *             
 *           
 * 
 * output : log ra là tam giác gì
 * 
 * 
 */    

var a,b,c;
    a = 3;
    b = 4;
    c = 5;


if(a == b || a == c || b == c){
    console.log("cạnh a:" + a,"cạnh b:" + b,"cạnh c:" + c);
    console.log("Đây là tam giác cân.");
}
if(a == b && a == c && b == c){
    console.log("cạnh a:" + a,"cạnh b:" + b,"cạnh c:" + c);
    console.log("Đây là tam giác đều.");
} 
if(a*a == b*b + c*c || b*b == a*a + c*c || c*c == a*a + b*b){
    console.log("cạnh a:" + a,"cạnh b:" + b,"cạnh c:" + c);
    console.log("Đây là tam giác vuông.");
}


