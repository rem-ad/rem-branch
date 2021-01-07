// Her yıl mayıs ayının 2. haftası pazar günü kutlanan anneler günü 2019 yılında ne zmaan kutlanacaktır?

var annelerGunu = new Date();

annelerGunu.setFullYear(2021);
annelerGunu.setHours(0,0,0,0);
annelerGunu.setMonth(4);
annelerGunu.setDate(1);

while (annelerGunu.getDay!=0) {
    
    annelerGunu.setDate(annelerGunu.getDate()+1);
}

annelerGunu.setDate(annelerGunu.getDate()+7);
console.log(annelerGunu);