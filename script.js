    document.addEventListener("DOMContentLoaded", function () {
      if (localStorage.getItem('visited_before')) {
        // المستخدم قد قام بزيارة الموقع من قبل         
      } else {
        // المستخدم يزور الموقع لأول مرة
alert('مرحبًا👋! شكرًا لزيارتك❤️.\n\nيقدم هذا الموقع معلومات حول إمساكيات شهر رمضان، وأوقات الصلاة ومعلومات إضافية. يمكنك النقر على أي يوم لعرض أوقات الصلاة والمعلومات الإضافية لتلك اليوم.');
        // قم بتعيين علامة تشير إلى أن المستخدم قد قام بزيارة الموقع
        localStorage.setItem('visited_before', true);
      }
  var days = document.getElementById("calendar");
  var prayerTable = document.getElementById("prayerTimes");
  var additionalInfoDiv = document.getElementById("additionalInfo");
  var notifications = []; // قائمة لتخزين الإشعارات

  var ramadanDays = [
    { day: 1, date: "11 March 2024", Suhoor: "3:43 صباحاً ", emsak: "4:23 صباحاً ", fajr: "4:43 صباحاً ",AlShorouk: "6:09 صباحاً ", dhuhr: "12:05 مساءً", asr: "3:28 مساءً", maghrib: "6:01 مساءً", isha: "7:18 مساءً" },
    { day: 2, date: "12 March 2024", Suhoor: "3:42 صباحاً ", emsak: "4:22 صباحاً ", fajr: "4:42 صباحاً ",AlShorouk: "6:08 صباحاً ", dhuhr: "12:05 مساءً", asr: "3:28 مساءً", maghrib: "6:02 مساءً", isha: "7:19 مساءً" },
    { day: 3, date: "13 March 2024", Suhoor: "3:41 صباحاً ", emsak: "4:21 صباحاً ", fajr: "4:40 صباحاً ",AlShorouk: "6:07 صباحاً ", dhuhr: "12:04 مساءً", asr: "3:29 مساءً", maghrib: "6:02 مساءً", isha: "7:19 مساءً" },
    { day: 4, date: "14 March 2024", Suhoor: "3:40 صباحاً ", emsak: "4:20 صباحاً ", fajr: "4:39 صباحاً ",AlShorouk: "6:06 صباحاً ", dhuhr: "12:04 مساءً", asr: "3:29 مساءً", maghrib: "6:03 مساءً", isha: "7:20 مساءً" },
    { day: 5, date: "15 March 2024", Suhoor: "3:39 صباحاً ", emsak: "4:19 صباحاً ", fajr: "4:38 صباحاً ",AlShorouk: "6:04 صباحاً ", dhuhr: "12:04 مساءً", asr: "3:29 مساءً", maghrib: "6:03 مساءً", isha: "7:21 مساءً" },
    { day: 6, date: "16 March 2024", Suhoor: "3:37 صباحاً ", emsak: "4:17 صباحاً ", fajr: "4:37 صباحاً ",AlShorouk: "6:03 صباحاً ", dhuhr: "12:03 مساءً", asr: "3:29 مساءً", maghrib: "6:04 مساءً", isha: "7:21 مساءً" },
    { day: 7, date: "17 March 2024", Suhoor: "3:36 صباحاً ", emsak: "4:16 صباحاً ", fajr: "4:35 صباحاً ",AlShorouk: "6:02 صباحاً ", dhuhr: "12:03 مساءً", asr: "3:29 مساءً", maghrib: "6:05 مساءً", isha: "7:22 مساءً" },
    { day: 8, date: "18 March 2024", Suhoor: "3:35 صباحاً ", emsak: "4:15 صباحاً ", fajr: "4:34 صباحاً ",AlShorouk: "6:01 صباحاً ", dhuhr: "12:03 مساءً", asr: "3:29 مساءً", maghrib: "6:05 مساءً", isha: "7:23 مساءً" },
    { day: 9, date: "19 March 2024", Suhoor: "3:33 صباحاً ", emsak: "4:13 صباحاً ", fajr: "4:33 صباحاً ",AlShorouk: "6:00 صباحاً ", dhuhr: "12:03 مساءً", asr: "3:30 مساءً", maghrib: "6:06 مساءً", isha: "7:23 مساءً" },
    { day: 10, date: "20 March 2024", Suhoor: "3:32 صباحاً ", emsak: "4:12 صباحاً ", fajr: "4:32 صباحاً ",AlShorouk: "5:58 صباحاً ", dhuhr: "12:02 مساءً", asr: "3:00 مساءً", maghrib: "6:07 مساءً", isha: "7:24 مساءً" },
    { day: 11, date: "21 March 2024", Suhoor: "3:31 صباحاً ", emsak: "4:11 صباحاً ", fajr: "4:30 صباحاً ",AlShorouk: "5:57 صباحاً ", dhuhr: "12:02 مساءً", asr: "3:00 مساءً", maghrib: "6:07 مساءً", isha: "7:25 مساءً" },
    { day: 12, date: "22 March 2024", Suhoor: "3:30 صباحاً ", emsak: "4:10 صباحاً ", fajr: "4:29 صباحاً ",AlShorouk: "5:56 صباحاً ", dhuhr: "12:02 مساءً", asr: "3:00 مساءً", maghrib: "6:08 مساءً", isha: "7:25 مساءً" },
    { day: 13, date: "23 March 2024", Suhoor: "3:28 صباحاً ", emsak: "4:08 صباحاً ", fajr: "4:28 صباحاً ",AlShorouk: "5:55 صباحاً ", dhuhr: "12:01 مساءً", asr: "3:00 مساءً", maghrib: "6:08 مساءً", isha: "7:26 مساءً" },
    { day: 14, date: "24 March 2024", Suhoor: "3:27 صباحاً ", emsak: "4:07 صباحاً ", fajr: "4:26 صباحاً ",AlShorouk: "5:54 صباحاً ", dhuhr: "12:01 مساءً", asr: "3:00 مساءً", maghrib: "6:09 مساءً", isha: "7:27 مساءً" },
    { day: 15, date: "25 March 2024", Suhoor: "3:26 صباحاً ", emsak: "4:06 صباحاً ", fajr: "4:25 صباحاً ",AlShorouk: "5:52 صباحاً ", dhuhr: "12:01 مساءً", asr: "3:00 مساءً", maghrib: "6:10 مساءً", isha: "7:28 مساءً" },
    { day: 16, date: "26 March 2024", Suhoor: "3:24 صباحاً ", emsak: "4:04 صباحاً ", fajr: "4:24 صباحاً ",AlShorouk: "5:51 صباحاً ", dhuhr: "12:00 مساءً", asr: "3:00 مساءً", maghrib: "6:10 مساءً", isha: "7:28 مساءً" },
    { day: 17, date: "27 March 2024", Suhoor: "3:23 صباحاً ", emsak: "4:03 صباحاً ", fajr: "4:22 صباحاً ",AlShorouk: "5:50 صباحاً ", dhuhr: "12:00 مساءً", asr: "3:00 مساءً", maghrib: "6:11 مساءً", isha: "7:29 مساءً" },
    { day: 18, date: "28 March 2024", Suhoor: "3:22 صباحاً ", emsak: "4:02 صباحاً ", fajr: "4:21 صباحاً ",AlShorouk: "5:49 صباحاً ", dhuhr: "12:00 مساءً", asr: "3:00 مساءً", maghrib: "6:11 مساءً", isha: "7:30 مساءً" },
    { day: 19, date: "29 March 2024", Suhoor: "3:20 صباحاً ", emsak: "4:00 صباحاً ", fajr: "4:20 صباحاً ",AlShorouk: "5:47 صباحاً ", dhuhr: "12:00 مساءً", asr: "3:00 مساءً", maghrib: "6:12 مساءً", isha: "7:30 مساءً" },
    { day: 20, date: "30 March 2024", Suhoor: "3:19 صباحاً ", emsak: "3:59 صباحاً ", fajr: "4:18 صباحاً ",AlShorouk: "5:46 صباحاً ", dhuhr: "11:59 مساءً", asr: "3:00 مساءً", maghrib: "6:13 مساءً", isha: "7:31 مساءً" },
    { day: 21, date: "31 March 2024", Suhoor: "3:18 صباحاً ", emsak: "3:58 صباحاً ", fajr: "4:17 صباحاً ",AlShorouk: "5:45 صباحاً ", dhuhr: "11:59 مساءً", asr: "3:00 مساءً", maghrib: "6:13 مساءً", isha: "7:32 مساءً" },
    { day: 22, date: "1 April 2024", Suhoor: "3:16 صباحاً ", emsak: "3:56 صباحاً ", fajr: "4:16 صباحاً ",AlShorouk: "5:44 صباحاً ", dhuhr: "11:59 مساءً", asr: "3:00 مساءً", maghrib: "6:14 مساءً", isha: "7:33 مساءً" },
    { day: 23, date: "2 April 2024", Suhoor: "3:15 صباحاً ", emsak: "34:55 صباحاً ", fajr: "4:14 صباحاً ",AlShorouk: "5:43 صباحاً ", dhuhr: "11:58 مساءً", asr: "3:00 مساءً", maghrib: "6:14 مساءً", isha: "7:33 مساءً" },
    { day: 24, date: "3 April 2024", Suhoor: "3:14 صباحاً ", emsak: "3:54 صباحاً ", fajr: "4:13 صباحاً ",AlShorouk: "5:41 صباحاً ", dhuhr: "11:58 مساءً", asr: "3:00 مساءً", maghrib: "6:15 مساءً", isha: "7:34 مساءً" },
    { day: 25, date: "4 April 2024", Suhoor: "3:12 صباحاً ", emsak: "3:52 صباحاً ", fajr: "4:12 صباحاً ",AlShorouk: "5:40 صباحاً ", dhuhr: "11:58 مساءً", asr: "3:00 مساءً", maghrib: "6:16 مساءً", isha: "7:35 مساءً" },
    { day: 26, date: "5 April 2024", Suhoor: "3:11 صباحاً ", emsak: "3:51 صباحاً ", fajr: "4:10 صباحاً ",AlShorouk: "5:39 صباحاً ", dhuhr: "11:57 مساءً", asr: "3:00 مساءً", maghrib: "6:16 مساءً", isha: "7:36 مساءً" },
    { day: 27, date: "6 April 2024", Suhoor: "3:10 صباحاً ", emsak: "3:50 صباحاً ", fajr: "4:09 صباحاً ",AlShorouk: "5:38 صباحاً ", dhuhr: "11:57 مساءً", asr: "3:00 مساءً", maghrib: "6:17 مساءً", isha: "7:36 مساءً" },
    { day: 28, date: "7 April 2024", Suhoor: "3:08 صباحاً ", emsak: "3:48 صباحاً ", fajr: "4:08 صباحاً ",AlShorouk: "5:37 صباحاً ", dhuhr: "11:57 مساءً", asr: "3:00 مساءً", maghrib: "6:18 مساءً", isha: "7:37 مساءً" },
    { day: 29, date: "8 April 2024", Suhoor: "3:07 صباحاً ", emsak: "3:47 صباحاً ", fajr: "4:06 صباحاً ",AlShorouk: "5:36 صباحاً ", dhuhr: "11:57 مساءً", asr: "3:00 مساءً", maghrib: "6:18 مساءً", isha: "7:37 مساءً" },
    { day: 30, date: "9 April 2024", Suhoor: "3:06 صباحاً ", emsak: "34:46 صباحاً ", fajr: "4:05 صباحاً ",AlShorouk: "5:34 صباحاً ", dhuhr: "11:56 مساءً", asr: "3:00 مساءً", maghrib: "6:19 مساءً", isha: "7:39 مساءً" },
  ];

  // اليوم الحالي
  var currentDate = new Date();
  var currentDay = currentDate.getDate();
  var currentMonth = currentDate.getMonth() + 1; // تذكر أنه يجب إضافة 1 إلى الشهر لأنه يبدأ من 0

  ramadanDays.forEach(function (ramadanDay) {
    var dayElement = document.createElement("div");
    dayElement.classList.add("day");
    dayElement.textContent = ramadanDay.day;

    // إضافة تمييز لليوم الحالي
    var dayDate = new Date(ramadanDay.date);
    var dayMonth = dayDate.getMonth() + 1;
    var dayNumber = dayDate.getDate();

    if (dayMonth === currentMonth && dayNumber === currentDay) {
      dayElement.classList.add("current-day");
    } else if (dayDate < currentDate) {
      // إذا كان اليوم أمس
      dayElement.classList.add("past-day");
    } else {
      // إذا كان اليوم غداً
      dayElement.classList.add("future-day");
    }

    dayElement.addEventListener("click", function () {
      displayPrayerTimes(ramadanDay);
      displayAdditionalInfo(ramadanDay);
    });

    var dayName = dayDate.toLocaleDateString('ar-EG', { weekday: 'long' });

    var dayText = document.createElement("div");
    dayText.textContent = dayName;
    dayElement.appendChild(dayText);

    days.appendChild(dayElement);
  });

  function displayPrayerTimes(day) {
    var prayerTableHTML = "<tr><th>الوقت</th><th>الاسم</th></tr>";
    prayerTableHTML += "<tr><td>" + day.Suhoor + "</td><td>السحور</td></tr>";
    prayerTableHTML += "<tr><td>" + day.emsak + "</td><td>الإمساك</td></tr>";
    prayerTableHTML += "<tr><td>" + day.fajr + "</td><td>الفجر</td></tr>";
    prayerTableHTML += "<tr><td>" + day.AlShorouk + "</td><td>الشروق</td></tr>";
    prayerTableHTML += "<tr><td>" + day.dhuhr + "</td><td>الظهر</td></tr>";
    prayerTableHTML += "<tr><td>" + day.asr + "</td><td>العصر</td></tr>";
    prayerTableHTML += "<tr><td>" + day.maghrib + "</td><td>المغرب</td></tr>";
    prayerTableHTML += "<tr><td>" + day.isha + "</td><td>العشاء</td></tr>";
    prayerTable.innerHTML = prayerTableHTML;
  }

  function displayAdditionalInfo(day) {
  var additionalInfoHTML = "<tr><th colspan='2'>معلومات إضافية</th></tr>";
  additionalInfoHTML += "<tr><td>اليوم</td><td>" + getArabicNumber(day.day) + " رمضان" + "</td></tr>";
  additionalInfoHTML += "<tr><td>التاريخ</td><td>" + formatDate(day.date) + "</td></tr>";

    // حساب الأيام المتبقية حتى عيد الفطر
  var daysUntilEidAlFitr = Math.ceil((new Date("April 9, 2024") - new Date(day.date)) / (1000 * 60 * 60 * 24));
  additionalInfoHTML += "<tr><td>الأيام المتبقية حتى عيد الفطر</td><td>" + (daysUntilEidAlFitr > 0 ? formatNumberInArabic(daysUntilEidAlFitr) + " يوم" : "غداً العيد") + "</td></tr>";


  // حساب الأيام المتبقية حتى العيد الكبير
    var daysUntilEid = Math.ceil((new Date("June 16, 2024") - new Date(day.date)) / (1000 * 60 * 60 * 24));
    additionalInfoHTML += "<tr><td>الأيام المتبقية حتى عيد الاضحي</td><td>" + formatNumberInArabic(daysUntilEid) + " يوم</td></tr>";


  additionalInfoTable.innerHTML = additionalInfoHTML;
}

function getArabicNumber(number) {
  var arabicNumbers = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩","١٠","١١","١٢","١٣","١٤","١٥","١٦","١٧","١٨","١٩","٢٠","٢١","٢٢","٢٣","٢٤","٢٥","٢٦","٢٧","٢٨","٢٩","٣٠"];
  return arabicNumbers[number];
}

function formatDate(date) {
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('ar-EG', options);
}
  
  // دالة لتنسيق الرقم باللغة العربية
  function formatNumberInArabic(number) {
    return new Intl.NumberFormat('ar-EG').format(number);
  }

  // دالة للحصول على رقم اليوم بالعربية
  function getArabicDayNumber(date) {
    return date.toLocaleDateString('ar-EG', { weekday: 'numeric' });
  }
  
    // دالة للحصول على معلومات اليوم الحالي
  function getCurrentDay() {
    // قم بتحديث هذه الدالة حسب احتياجات التطبيق الخاصة بك
    // يمكنك استخدام مكتبات خارجية أو API للحصول على اليوم الحالي
    // في هذا المثال، يتم استخدام الوقت الحالي كوقت لليوم
    var currentDate = new Date();
    return {
      day: currentDate.getDate(),
      date: currentDate.toDateString()
    };
  }
  // عرض معلومات اليوم الحالي عند تحميل الصفحة
  var currentRamadanDay = ramadanDays.find(function (ramadanDay) {
    var dayDate = new Date(ramadanDay.date);
    var dayMonth = dayDate.getMonth() + 1;
    var dayNumber = dayDate.getDate();

    return dayMonth === currentMonth && dayNumber === currentDay;
  });

  displayPrayerTimes(currentRamadanDay);
  displayAdditionalInfo(currentRamadanDay);
});
