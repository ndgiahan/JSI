let student = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVB",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 04"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindX 01", "mindX 03", "mindX 04"]
    },
    {
        name: "NVD",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    }
    ]
//Hãy tạo một prompt với câu hỏi: “Độ tuổi cần tìm?”. 
//Khi nhập vào một số, hiển thị ra màn hình tên của những người có độ tuổi tương ứng nhập vào. 
//Nếu không có thì hiển thị: “Không tìm thấy!”    
// var ageSearch = prompt('Nhập độ tuổi cần tìm: ');
//Hàm check độ tuổi có giống với độ tuổi trong mảng hay không
// function checkAge(age) {
//     for (let i =0; i<student.length; i++) {
//         if (student[i].age == age) {
//             alert('Người có độ tuổi '+age+' là '+ student[i].name)
//         }
//         else {
//             alert('Không tìm thấy tên nào ở độ tuổi '+age)
//         }
//     }
// }
// checkAge(ageSearch)

//Hãy tạo một prompt với câu hỏi: “Khóa học cần tìm?”. 
//Khi nhập vào mã khóa học (VD: mindX 02) sẽ hiển thị ra màn hình tên tất cả những người học khóa đó. 
//Nếu khóa học không có, hiển thị: “Chưa có lớp học này!”.
var courseSearch = prompt('Nhập khóa học cần tìm: ')
function checkCourse(cour) {
    for(let i=0; i<student.length; i++) {
        for (let j=0; j<student[i].course.length; j++) {
            if (student[i].course[j] == cour) {
                alert(student[i].name)
            }
        }
    }
}
checkCourse(courseSearch)
