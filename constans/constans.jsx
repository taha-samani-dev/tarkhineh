import User from "@/components/ui/icons/user";
import Diagram from "@/components/ui/icons/diagram";
import HomeWifi from "@/components/ui/icons/home-wifi";
import MenuBboard from "@/components/ui/icons/menu-board";
import Wallet2 from "@/components/ui/icons/wallet-2";
import Heart from "@/components/ui/icons/heart";
import Location from "@/components/ui/icons/locatin";
import Logout from "@/components/ui/icons/logout";
import Twitter from "@/components/ui/icons/twitter";
import Instagram from "@/components/ui/icons/instagram";
import Telegram from "@/components/ui/icons/telegram";

export const data = {
    slides:[
        {text:"تجربه غذای سالم و گیاهی به سبک ترخینه", photo:'/home_photo/slider_main/slide_1_home.jpg', href:"/", textLink:"سفارش انلاین غذا"},
        {text:"تجربه غذای سالم و گیاهی به سبک ترخینه", photo:'/home_photo/slider_main/slide_1_home.jpg', href:"/", textLink:"سفارش انلاین غذا"},
        {text:"تجربه غذای سالم و گیاهی به سبک ترخینه", photo:'/home_photo/slider_main/slide_1_home.jpg', href:"/", textLink:"سفارش انلاین غذا"},
        {text:"تجربه غذای سالم و گیاهی به سبک ترخینه", photo:'/home_photo/slider_main/slide_1_home.jpg', href:"/", textLink:"سفارش انلاین غذا"},
        {text:"تجربه غذای سالم و گیاهی به سبک ترخینه", photo:'/home_photo/slider_main/slide_1_home.jpg', href:"/", textLink:"سفارش انلاین غذا"},
        {text:"تجربه غذای سالم و گیاهی به سبک ترخینه", photo:'/home_photo/slider_main/slide_1_home.jpg', href:"/", textLink:"سفارش انلاین غذا"}
    ],
    category:[
        {label:"غذای اصلی",name:"main-food",photo:'/category/main_food.png', alt:"main food | غذای اصلی"},
        {label:"پیش غذا",name:"pre-food",photo:'/category/pre_food.png', alt:"pre food | پیش غذا"},
        {label:"دسر",name:"dessert",photo:'/category/dessert.png', alt:"dessert | دسر"},
        {label:"نوشیدنی",name:"drink",photo:'/category/drink.png', alt:"drink | نوشیدنی"},
    ],
    sectionAbout:{
        photo: "/home_photo/about-us.jpg",
        title:"رستوران‌های زنجیره‌ای ترخینه",
        text:"مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.",
        href:"/about-us",
        label:"اطلاعات بیشتر",
    },
    features: [
        {id:0, text:"پرسنلی مجرب و حرفه‌ای", Icon:User},
        {id:1, text:"کیفیت بالای غذاها", Icon:Diagram},
        {id:2, text:"محیطی دلنشین و آرام", Icon:HomeWifi},
        {id:3, text:"منوی متنوع", Icon:MenuBboard},
    ],
    branches : [
    {
        label: "اکتابان",
        href: "/branches/ekbatan",
        addressBranch:"شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
        name: "ekbatan" ,
        mainPhoto:'/branches/ekbatan/main/ekbatan_main.jpg',
        photos:[
            {text:'pic main', photo: '/branches/ekbatan/main/ekbatan_main.jpg'},
            {text: 'pic 1', photo:'/branches/ekbatan/main/ekbatan_1.jpg'},
            {text: 'pic 2', photo: '/branches/ekbatan/main/ekbatan_2.jpg'},
            {text:'pic 3', photo: '/branches/ekbatan/main/ekbatan_3.jpg'},
            {text: 'pic 4', photo: '/branches/ekbatan/main/ekbatan_4.jpg'},
            {text:'pic 5', photo: '/branches/ekbatan/main/ekbatan_5.jpg'}
        ]
    },

    {
        label: "چالوس",
        href: "/branches/chalus",
        addressBranch:"شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
        name: "chalus",
        mainPhoto:'/branches/ekbatan/main/ekbatan_main.jpg',
        photos:[
            {text:'pic main', photo: '/branches/ekbatan/main/ekbatan_main.jpg'},
            {text:'pic 1', photo:'/branches/ekbatan/main/ekbatan_1.jpg'},
            {text: 'pic 2', photo: '/branches/ekbatan/main/ekbatan_2.jpg'},
            {text:'pic 3', photo: '/branches/ekbatan/main/ekbatan_3.jpg'},
            {text: 'pic 4', photo: '/branches/ekbatan/main/ekbatan_4.jpg'},
            {text:'pic 5', photo: '/branches/ekbatan/main/ekbatan_5.jpg'}
        ]
    },

    {
        label: "اقدسیه",
        href: "/branches/aghdasiyeh",
        addressBranch:"شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
        name: "aghdasiyeh",
        mainPhoto:'/branches/ekbatan/main/ekbatan_main.jpg',
        photos:[
            {text:'pic main', photo: '/branches/ekbatan/main/ekbatan_main.jpg'},
            {text:'pic 1', photo:'/branches/ekbatan/main/ekbatan_1.jpg'},
            {text: 'pic 2', photo: '/branches/ekbatan/main/ekbatan_2.jpg'},
            {text:'pic 3', photo: '/branches/ekbatan/main/ekbatan_3.jpg'},
            {text: 'pic 4', photo: '/branches/ekbatan/main/ekbatan_4.jpg'},
            {text:'pic 5', photo: '/branches/ekbatan/main/ekbatan_5.jpg'}
        ]
    },

    {
        label: "ونک",
        href: "/branches/vanak",
        addressBranch:"شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
        name: "vanak",
        mainPhoto:'/branches/ekbatan/main/ekbatan_main.jpg',
        photos:[
            {text:'pic main', photo: '/branches/ekbatan/main/ekbatan_main.jpg'},
            {text:'pic 1', photo:'/branches/ekbatan/main/ekbatan_1.jpg'},
            {text: 'pic 2', photo: '/branches/ekbatan/main/ekbatan_2.jpg'},
            {text:'pic 3', photo: '/branches/ekbatan/main/ekbatan_3.jpg'},
            {text: 'pic 4', photo: '/branches/ekbatan/main/ekbatan_4.jpg'},
            {text:'pic 5', photo: '/branches/ekbatan/main/ekbatan_5.jpg'}
        ]
    }],
    foods : [
        {id:1055, photo:'/foods/food_test_1/food.jpg', title:"دلمه برگ کلم", contents:"", countScore:32, score:80, price:220_000, Discount:8,allPhoto:[]},
        {id:1575, photo: '/foods/food_test_0/food.jpg', title: '', contents: '', countScore: 32, score: 80, price: 220_000, Discount:8, allPhoto:[{photo:'/foods/food_test_0/food.jpg', text: ':)'},{photo:'/foods/food_test_0/1.jpg', text: ':)'},{photo:'/foods/food_test_0/2.jpg', text: ':)'},{photo:'/foods/food_test_0/3.jpg', text: ':)'},{photo:'/foods/food_test_0/4.jpg', text: ':)'},{photo:'/foods/food_test_0/5.jpg', text: ':)'},{photo:'/foods/food_test_0/6.jpg', text: ':)'},]},
    ],
    profilePopup : [
        {
            label: "پروفایل",
            isLink: true,
            action: null,
            href: "/profile/information",
            Icon:User
        },
        {
            label: "پیگیری سفارشات",
            isLink: true,
            action: null,
            href: "/profile/track-order",
            Icon:Wallet2
        },
        {
            label: "علاقه مندی ها",
            isLink: true,
            action: null,
            href: "/profile/favorite",
            Icon:Heart
        },
        {
            label: "ادرس های من",
            isLink: true,
            action: null,
            href: "/profile/address",
            Icon:Location
        },
        {
            label: "خروج از حساب",
            isLink: true,
            action: null,
            href: "/profile/logout",
            Icon:Logout
        },
    ],
    footerData:{
        easyAccess : [
            {label:"پرسش های متداول", href:"/help?category=faq"},
            {label:"قوانین ترخینه", href:"/help?category=rules"},
            {label:"حریم خصوصی", href:"/help?category=privacy"}
        ],
        contactInputs: [
            {type:'text', id:"id1", name:"full-name", placeholder:'نام و نام خانوادگی'},
            {type:'text', id:"id2", name:"phone-number", placeholder:'شماره تماس'},
            {type:'email', id:"id3", name:"email", placeholder:'آدرس ایمیل (اختیاری)'},
        ],
        messageBox : {id:'id4', name:'message', maxLength:200, placeholder:"پیام شما", submitText:"ارسال پیام"},
        contactSocialMedia : [
            { Icon: Twitter,href:"/"},
            { Icon: Instagram ,href:"/"},
            { Icon: Telegram ,href:"/"},
        ],
    }
}