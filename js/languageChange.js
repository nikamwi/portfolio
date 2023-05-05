let langs = document.querySelector(".langs"),
    link = document.querySelectorAll(".a"),
    chabout = document.querySelector(".chabout");
    chproject = document.querySelector(".chproject");
    chcontact = document.querySelector(".chcontact");
    abouth21 = document.querySelector(".chabouth21");
    aboutp = document.querySelector(".chabouthp");
    readMore = document.getElementById("readmore");
    readLess = document.getElementById("readless");
    calculator = document.getElementById("calculator");
    calculatorp = document.getElementById("calculatorp");
    tictactoep = document.getElementById("tictactoep");
    qrgenerator = document.getElementById("qrgenerator");
    qrgeneratorp = document.getElementById("qrgeneratorp");
    timer = document.getElementById("timer");
    timerp = document.getElementById("timerp");
    contactname = document.getElementById("name");
    email = document.getElementById("email");
    message = document.getElementById("message");
    send = document.getElementById("sendmesage");
    contacth1 = document.querySelector(".contacth1");
    projecth1 = document.querySelector(".projecth1");
    myskill = document.querySelector(".myskill");
    portfolioh1 = document.querySelector(".portfolioh1");


link.forEach(el=>{
    el.addEventListener("click", ()=>{
        langs.querySelector(".active").classList.remove("active");
        el.classList.add("active");
        let attr = el.getAttribute("language")
        chabout.textContent = data[attr].chabout
        chproject.textContent = data[attr].chproject
        chcontact.textContent = data[attr].chcontact
        abouth21.textContent = data[attr].abouth21
        aboutp.textContent = data[attr].aboutp
        readMore.textContent = data[attr].readMore
        readLess.textContent = data[attr].readLess
        calculator.textContent = data[attr].calculator
        calculatorp.textContent = data[attr].calculatorp
        tictactoep.textContent = data[attr].tictactoep
        qrgenerator.textContent = data[attr].qrgenerator
        qrgeneratorp.textContent = data[attr].qrgeneratorp
        timer.textContent = data[attr].timer
        timerp.textContent = data[attr].timerp
        contactname.textContent = data[attr].contactname
        email.textContent = data[attr].email
        message.textContent = data[attr].message
        send.textContent = data[attr].send
        contacth1.textContent = data[attr].contacth1
        projecth1.textContent = data[attr].projecth1
        myskill.textContent = data[attr].myskill
        portfolioh1.textContent = data[attr].portfolioh1
        calculator.style.fontSize = "56px"
    })
})

let data = {
    georgia: {
        chabout: "ჩემს შესახებ",
        chproject: "პროექტები",
        chcontact: "კონტაქტი",
        abouth21: "გამარჯობა, მევარ ნიკა,",
        aboutp: "გამარჯობა, მე ვარ ნიკა მწითური, front-end react დეველოპერი. 2022 წელს დავამთავრე საქართველოს ტექნიკური უნივერსიტეტის სამშენებლო ფაკულტეტი, ამის შემდეგ დავინტერესდი პროგრამირებით და დავიწყე სწავლა ციფრულ ინდუსტრიის აკადემიაში ვებ პროგრამირების კურსზე.უკვე 6 თვეზე მეტია რაც ვსწავლობ პროგრამირებას და ამ ცოდნით ვაკეთებ პროექტებს, რომლებიც ატვირთულია ჩემს github პროფილზე. მინდა გავაუმჯობესო პროგრამირების უნარები და გავხდე პროფესიონალი front-end developer და შემდეგ full-stack developer.",
        readMore: "მეტი",
        readLess: "ნაკლები",
        calculator: "კალკულატორი",
        calculatorp: "კალკულატორი აწყობილია figma დიზაინის მიხედვით, რესფონსიულია ნებისმიერ მოწყობილობაზე, გამოყენებულია:  html5, css3 და javascript.",
        tictactoep: "ეს თამაში აწყობილია ჩემი დიზაინის მიხედვით, რესფონსიულია ნებისმიერ მოწყობილობაზე, გამოყენებულია: react js, mui და css.",
        qrgeneratorp: "QR გენერატორი აწყობილია ჩემი დიზაინით, რესფონსიულია ნებისმიერ მოწყობილობაზე, გამოყენებულია: html5,javascript და css.",
        qrgenerator: "QR გენერატორი ",
        timer: "ტაიმერი",
        timerp: "ტაიმერი აწყობილია figma დიზაინის მიხედვით,რესფონსიულია ნებისმიერ მოწყობილობაზე,  გამოყენებულია: html5,javascript და css.",
        contactname: "სახელი",
        email: "ემაილი",
        message: "მესიჯი",
        send: "გაგზავნა",
        contacth1: "კონტაქტი",
        projecth1: "პროექტები",
        myskill: "ჩემი უნარები",
        portfolioh1: "ეს პორტფოლიო აწყობილია ჩემს მიერ",
    },
    english: {
        logo: "Developer",
        chabout: "About",
        chproject: "Project",
        chcontact: "Contact",
        abouth21: "Hi, I am Nika,",
        aboutp: "Hello, I'm Nika Mtsituri, a front-end react developer. In 2022, I graduated from the Faculty of Construction of the Technical University of Georgia, after that I became interested in web programming and started studying at the Digital Industry Academy on a web programming course. I have been learning programming for more than 6 months now and with this knowledge I am making projects that are uploaded to my github profile. I want to improve my programming skills and become a professional front-end developer and then a full-stack developer.",
        readMore: "read more",
        readLess: "read less",
        calculator: "Calculator",
        calculatorp: "The calculator is built according to figma design, it is responsive on any device, uses: html5, css3 end javascript.",
        tictactoep: "The game Tic-Tac-Toe is made by my design, it is responsive on any device, it uses: react js, mui end css.",
        qrgeneratorp: "QR Generator is made by my design, it is responsive on any device, it uses: html5,javascript end css.",
        qrgenerator: "QR generator",
        timer: "Timer",
        timerp: "The Timer is built according to figma design, it is responsive on any device, uses: html5, css3 end javascript.",
        contactname: "Name",
        email: "Email",
        message: "Message",
        send: "send message",
        contacth1: "Contact",
        projecth1: "PROJECTS",
        myskill: "My Skills",
        portfolioh1: "This portfolio is compiled by me",
    },
}