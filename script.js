function analyzeTraffic() {
    let trafficLevel = Math.random() * 100; // توليد نسبة عشوائية لحالة المرور
    let message = "";

    if (trafficLevel < 30) {
        message = "🚗🚗 حركة المرور خفيفة!";
    } else if (trafficLevel < 70) {
        message = "🚙🚙 ازدحام متوسط، كن حذرًا!";
    } else {
        message = "🚦🚦 ازدحام شديد! يُفضل تجنب الطرق المزدحمة.";
    }

    document.getElementById("result").innerText = message;
}
